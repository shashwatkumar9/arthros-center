import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { PlusCircle, Edit, Trash2, Users, FileText, LogOut } from 'lucide-react';

type UserRole = 'admin' | 'editor' | 'viewer';

const AdminDashboard = () => {
  const { user, userProfile, signOut } = useAuth();
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Blog form state
  const [blogForm, setBlogForm] = useState({
    title: '',
    content: '',
    excerpt: '',
    category_id: '',
    published: false,
    featured_image_url: ''
  });
  const [editingBlog, setEditingBlog] = useState<string | null>(null);

  useEffect(() => {
    if (!user) {
      navigate('/auth');
      return;
    }

    if (userProfile && userProfile.role !== 'admin' && userProfile.role !== 'editor') {
      toast.error('Access denied. Admin or editor role required.');
      navigate('/');
      return;
    }

    if (userProfile) {
      fetchData();
    }
  }, [user, userProfile, navigate]);

  const fetchData = async () => {
    await Promise.all([fetchBlogs(), fetchCategories(), fetchUsers()]);
    setLoading(false);
  };

  const fetchBlogs = async () => {
    const { data, error } = await supabase
      .from('blogs')
      .select(`
        *,
        category:blog_categories(name),
        author:profiles(full_name)
      `)
      .order('created_at', { ascending: false });
    
    if (!error && data) {
      setBlogs(data);
    }
  };

  const fetchCategories = async () => {
    const { data, error } = await supabase
      .from('blog_categories')
      .select('*')
      .order('name');
    
    if (!error && data) {
      setCategories(data);
    }
  };

  const fetchUsers = async () => {
    if (userProfile?.role === 'admin') {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (!error && data) {
        setUsers(data);
      }
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  const handleBlogSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!blogForm.title || !blogForm.content) {
      toast.error('Title and content are required');
      return;
    }

    const slug = generateSlug(blogForm.title);
    const blogData = {
      ...blogForm,
      slug,
      author_id: user?.id,
      published_at: blogForm.published ? new Date().toISOString() : null
    };

    let result;
    if (editingBlog) {
      result = await supabase
        .from('blogs')
        .update(blogData)
        .eq('id', editingBlog);
    } else {
      result = await supabase
        .from('blogs')
        .insert([blogData]);
    }

    if (result.error) {
      toast.error(result.error.message);
    } else {
      toast.success(editingBlog ? 'Blog updated successfully!' : 'Blog created successfully!');
      setBlogForm({
        title: '',
        content: '',
        excerpt: '',
        category_id: '',
        published: false,
        featured_image_url: ''
      });
      setEditingBlog(null);
      fetchBlogs();
    }
  };

  const handleEditBlog = (blog: any) => {
    setBlogForm({
      title: blog.title,
      content: blog.content,
      excerpt: blog.excerpt || '',
      category_id: blog.category_id || '',
      published: blog.published,
      featured_image_url: blog.featured_image_url || ''
    });
    setEditingBlog(blog.id);
  };

  const handleDeleteBlog = async (id: string) => {
    if (confirm('Are you sure you want to delete this blog post?')) {
      const { error } = await supabase
        .from('blogs')
        .delete()
        .eq('id', id);

      if (error) {
        toast.error(error.message);
      } else {
        toast.success('Blog deleted successfully!');
        fetchBlogs();
      }
    }
  };

  const handleUpdateUserRole = async (userId: string, newRole: UserRole) => {
    const { error } = await supabase
      .from('profiles')
      .update({ role: newRole })
      .eq('id', userId);

    if (error) {
      toast.error(error.message);
    } else {
      toast.success('User role updated successfully!');
      fetchUsers();
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-white">Admin Dashboard</h1>
          <Button onClick={handleSignOut} variant="outline" className="border-slate-600 text-slate-300">
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </Button>
        </div>

        <Tabs defaultValue="blogs" className="space-y-6">
          <TabsList className="bg-slate-700 text-slate-300">
            <TabsTrigger value="blogs" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Blog Management
            </TabsTrigger>
            {userProfile?.role === 'admin' && (
              <TabsTrigger value="users" className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                User Management
              </TabsTrigger>
            )}
          </TabsList>

          <TabsContent value="blogs" className="space-y-6">
            {/* Blog Form */}
            <Card className="bg-slate-700/50 border-slate-600">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <PlusCircle className="w-5 h-5" />
                  {editingBlog ? 'Edit Blog Post' : 'Create New Blog Post'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleBlogSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="title" className="text-slate-300">Title</Label>
                      <Input
                        id="title"
                        value={blogForm.title}
                        onChange={(e) => setBlogForm({ ...blogForm, title: e.target.value })}
                        className="bg-slate-600 border-slate-500 text-white"
                        placeholder="Enter blog title"
                      />
                    </div>
                    <div>
                      <Label htmlFor="category" className="text-slate-300">Category</Label>
                      <Select value={blogForm.category_id} onValueChange={(value) => setBlogForm({ ...blogForm, category_id: value })}>
                        <SelectTrigger className="bg-slate-600 border-slate-500 text-white">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem key={category.id} value={category.id}>
                              {category.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="featured_image" className="text-slate-300">Featured Image URL</Label>
                    <Input
                      id="featured_image"
                      value={blogForm.featured_image_url}
                      onChange={(e) => setBlogForm({ ...blogForm, featured_image_url: e.target.value })}
                      className="bg-slate-600 border-slate-500 text-white"
                      placeholder="Enter image URL"
                    />
                  </div>

                  <div>
                    <Label htmlFor="excerpt" className="text-slate-300">Excerpt</Label>
                    <Textarea
                      id="excerpt"
                      value={blogForm.excerpt}
                      onChange={(e) => setBlogForm({ ...blogForm, excerpt: e.target.value })}
                      className="bg-slate-600 border-slate-500 text-white"
                      placeholder="Brief description of the blog post"
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label htmlFor="content" className="text-slate-300">Content</Label>
                    <Textarea
                      id="content"
                      value={blogForm.content}
                      onChange={(e) => setBlogForm({ ...blogForm, content: e.target.value })}
                      className="bg-slate-600 border-slate-500 text-white"
                      placeholder="Write your blog content here..."
                      rows={10}
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Switch
                      id="published"
                      checked={blogForm.published}
                      onCheckedChange={(checked) => setBlogForm({ ...blogForm, published: checked })}
                    />
                    <Label htmlFor="published" className="text-slate-300">Publish immediately</Label>
                  </div>

                  <div className="flex gap-2">
                    <Button type="submit" className="bg-cyan-500 hover:bg-cyan-600">
                      {editingBlog ? 'Update Blog' : 'Create Blog'}
                    </Button>
                    {editingBlog && (
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={() => {
                          setEditingBlog(null);
                          setBlogForm({
                            title: '',
                            content: '',
                            excerpt: '',
                            category_id: '',
                            published: false,
                            featured_image_url: ''
                          });
                        }}
                        className="border-slate-600 text-slate-300"
                      >
                        Cancel
                      </Button>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Blog List */}
            <Card className="bg-slate-700/50 border-slate-600">
              <CardHeader>
                <CardTitle className="text-white">All Blog Posts</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-slate-300">Title</TableHead>
                      <TableHead className="text-slate-300">Category</TableHead>
                      <TableHead className="text-slate-300">Author</TableHead>
                      <TableHead className="text-slate-300">Status</TableHead>
                      <TableHead className="text-slate-300">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {blogs.map((blog) => (
                      <TableRow key={blog.id}>
                        <TableCell className="text-white">{blog.title}</TableCell>
                        <TableCell className="text-slate-300">{blog.category?.name || 'Uncategorized'}</TableCell>
                        <TableCell className="text-slate-300">{blog.author?.full_name || 'Anonymous'}</TableCell>
                        <TableCell>
                          <Badge variant={blog.published ? 'default' : 'secondary'}>
                            {blog.published ? 'Published' : 'Draft'}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleEditBlog(blog)}
                              className="border-slate-600 text-slate-300"
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="destructive"
                              onClick={() => handleDeleteBlog(blog.id)}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {userProfile?.role === 'admin' && (
            <TabsContent value="users">
              <Card className="bg-slate-700/50 border-slate-600">
                <CardHeader>
                  <CardTitle className="text-white">User Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-slate-300">Name</TableHead>
                        <TableHead className="text-slate-300">Email</TableHead>
                        <TableHead className="text-slate-300">Role</TableHead>
                        <TableHead className="text-slate-300">Created</TableHead>
                        <TableHead className="text-slate-300">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {users.map((profile) => (
                        <TableRow key={profile.id}>
                          <TableCell className="text-white">{profile.full_name || 'No name'}</TableCell>
                          <TableCell className="text-slate-300">{profile.email}</TableCell>
                          <TableCell>
                            <Badge 
                              variant={
                                profile.role === 'admin' ? 'destructive' : 
                                profile.role === 'editor' ? 'default' : 'secondary'
                              }
                            >
                              {profile.role}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-slate-300">
                            {new Date(profile.created_at).toLocaleDateString()}
                          </TableCell>
                          <TableCell>
                            <Select 
                              value={profile.role} 
                              onValueChange={(value) => handleUpdateUserRole(profile.id, value)}
                            >
                              <SelectTrigger className="w-32">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="viewer">Viewer</SelectItem>
                                <SelectItem value="editor">Editor</SelectItem>
                                <SelectItem value="admin">Admin</SelectItem>
                              </SelectContent>
                            </Select>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          )}
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
