
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  featured_image_url: string;
  published_at: string;
  category: {
    name: string;
    slug: string;
  };
  author: {
    full_name: string;
  };
}

const BlogPost = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      fetchBlog(slug);
    }
  }, [slug]);

  const fetchBlog = async (blogSlug: string) => {
    const { data, error } = await supabase
      .from('blogs')
      .select(`
        *,
        category:blog_categories(name, slug),
        author:profiles(full_name)
      `)
      .eq('slug', blogSlug)
      .eq('published', true)
      .single();
    
    if (!error && data) {
      setBlog(data);
    }
    setLoading(false);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        <div className="container mx-auto px-4 py-20">
          <div className="text-center text-white">Loading...</div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Blog Post Not Found</h1>
            <p className="text-slate-300 mb-8">The blog post you're looking for doesn't exist.</p>
            <Link to="/blog">
              <Button className="bg-cyan-500 hover:bg-cyan-600">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Header />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="inline-block mb-8">
              <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-600">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>

            <Card className="bg-slate-700/50 border-slate-600">
              <CardContent className="p-8">
                {blog.featured_image_url && (
                  <img
                    src={blog.featured_image_url}
                    alt={blog.title}
                    className="w-full h-64 object-cover rounded-lg mb-6"
                  />
                )}
                
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-400">
                    {blog.category?.name}
                  </Badge>
                </div>

                <h1 className="text-4xl font-bold text-white mb-6">
                  {blog.title}
                </h1>

                <div className="flex items-center gap-6 text-slate-400 mb-8 pb-6 border-b border-slate-600">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {blog.author?.full_name || 'Anonymous'}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {formatDate(blog.published_at)}
                  </div>
                </div>

                <div className="prose prose-invert max-w-none">
                  <div 
                    className="text-slate-300 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: blog.content.replace(/\n/g, '<br />') }}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;
