
-- Create user roles enum
CREATE TYPE public.user_role AS ENUM ('admin', 'editor', 'viewer');

-- Create profiles table for user management
CREATE TABLE public.profiles (
  id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  full_name TEXT,
  role user_role NOT NULL DEFAULT 'viewer',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  PRIMARY KEY (id)
);

-- Create blog categories table
CREATE TABLE public.blog_categories (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create blogs table
CREATE TABLE public.blogs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  content TEXT NOT NULL,
  excerpt TEXT,
  featured_image_url TEXT,
  category_id UUID REFERENCES public.blog_categories(id),
  author_id UUID REFERENCES public.profiles(id) NOT NULL,
  published BOOLEAN NOT NULL DEFAULT false,
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blogs ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check user roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role user_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.profiles
    WHERE id = _user_id
      AND role = _role
  )
$$;

-- RLS Policies for profiles
CREATE POLICY "Users can view their own profile" 
  ON public.profiles 
  FOR SELECT 
  USING (auth.uid() = id);

CREATE POLICY "Admins can view all profiles" 
  ON public.profiles 
  FOR SELECT 
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update all profiles" 
  ON public.profiles 
  FOR UPDATE 
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can insert profiles" 
  ON public.profiles 
  FOR INSERT 
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete profiles" 
  ON public.profiles 
  FOR DELETE 
  USING (public.has_role(auth.uid(), 'admin'));

-- RLS Policies for blog_categories
CREATE POLICY "Anyone can view categories" 
  ON public.blog_categories 
  FOR SELECT 
  TO authenticated, anon 
  USING (true);

CREATE POLICY "Admins and editors can manage categories" 
  ON public.blog_categories 
  FOR ALL 
  USING (public.has_role(auth.uid(), 'admin') OR public.has_role(auth.uid(), 'editor'));

-- RLS Policies for blogs
CREATE POLICY "Anyone can view published blogs" 
  ON public.blogs 
  FOR SELECT 
  TO authenticated, anon 
  USING (published = true);

CREATE POLICY "Admins can view all blogs" 
  ON public.blogs 
  FOR SELECT 
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Editors can view all blogs" 
  ON public.blogs 
  FOR SELECT 
  USING (public.has_role(auth.uid(), 'editor'));

CREATE POLICY "Authors can view their own blogs" 
  ON public.blogs 
  FOR SELECT 
  USING (auth.uid() = author_id);

CREATE POLICY "Admins and editors can insert blogs" 
  ON public.blogs 
  FOR INSERT 
  WITH CHECK (public.has_role(auth.uid(), 'admin') OR public.has_role(auth.uid(), 'editor'));

CREATE POLICY "Admins can update all blogs" 
  ON public.blogs 
  FOR UPDATE 
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Editors can update all blogs" 
  ON public.blogs 
  FOR UPDATE 
  USING (public.has_role(auth.uid(), 'editor'));

CREATE POLICY "Authors can update their own blogs" 
  ON public.blogs 
  FOR UPDATE 
  USING (auth.uid() = author_id);

CREATE POLICY "Admins can delete all blogs" 
  ON public.blogs 
  FOR DELETE 
  USING (public.has_role(auth.uid(), 'admin'));

-- Create trigger function to handle new user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name, role)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data ->> 'full_name', ''),
    'viewer'
  );
  RETURN NEW;
END;
$$;

-- Create trigger for new user signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Insert default blog categories
INSERT INTO public.blog_categories (name, slug, description) VALUES
('Knee Surgeries', 'knee-surgeries', 'Articles about knee surgery procedures and treatments'),
('Shoulder & Elbow', 'shoulder-elbow', 'Content about shoulder and elbow treatments'),
('Hip & Pelvis', 'hip-pelvis', 'Information about hip and pelvis procedures'),
('Spine Surgery', 'spine-surgery', 'Spine surgery articles and insights'),
('Sports Medicine', 'sports-medicine', 'Sports medicine and injury prevention'),
('Hand & Wrist', 'hand-wrist', 'Hand and wrist surgery information'),
('Foot & Ankle', 'foot-ankle', 'Foot and ankle treatment articles'),
('General Health', 'general-health', 'General orthopedic health information');
