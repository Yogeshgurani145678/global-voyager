import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue } from
"@/components/ui/select";
import { Search, Calendar1 as Calendar, Clock, User, Tag } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import { formatDate } from "@/lib/utils";

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
  "all",
  ...Array.from(new Set(blogPosts.map((post) => post.category)))];


  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.content.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
    selectedCategory === "all" || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts[0];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
          Travel Blog
        </h1>
        <p className="mt-2 text-muted-foreground">
          Discover travel tips, guides, and inspiration for your next adventure
        </p>
      </div>

      {/* Search and Filter */}
      <div className="mb-8 flex flex-wrap items-center gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10" />

        </div>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) =>
            <SelectItem key={category} value={category}>
                {category === "all" ? "All Categories" : category}
              </SelectItem>
            )}
          </SelectContent>
        </Select>
      </div>

      {/* Featured Post */}
      <div className="mb-12">
        <Link
          to={`/blog/${featuredPost.slug}`}
          className="group block overflow-hidden rounded-xl">

          <div className="relative h-[400px] w-full overflow-hidden">
            <img
              src={featuredPost.imageUrl}
              alt={featuredPost.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white md:p-8">
              <Badge className="mb-3 bg-primary hover:bg-primary/90">
                {featuredPost.category}
              </Badge>
              <h2 className="mb-3 font-heading text-2xl font-bold text-shadow-lg md:text-4xl">
                {featuredPost.title}
              </h2>
              <p className="mb-4 max-w-3xl text-lg text-white/90">
                {featuredPost.excerpt}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-white/80">
                <div className="flex items-center">
                  <User className="mr-1 h-4 w-4" />
                  {featuredPost.author.name}
                </div>
                <div className="flex items-center">
                  <Calendar className="mr-1 h-4 w-4" />
                  {formatDate(featuredPost.date)}
                </div>
                <div className="flex items-center">
                  <Clock className="mr-1 h-4 w-4" />
                  {featuredPost.readTime} min read
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) =>
        <Card key={post.id} className="overflow-hidden">
            <Link to={`/blog/${post.slug}`} className="group block">
              <div className="relative h-48 overflow-hidden">
                <img
                src={post.imageUrl}
                alt={post.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />

                <div className="absolute top-3 right-3">
                  <Badge className="bg-primary hover:bg-primary/90">
                    {post.category}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-5">
                <h3 className="mb-2 font-heading text-xl font-bold group-hover:text-primary">
                  {post.title}
                </h3>
                <p className="mb-4 text-muted-foreground">{post.excerpt}</p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="mr-1 h-4 w-4" />
                    {formatDate(post.date)}
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-1 h-4 w-4" />
                    {post.readTime} min read
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.slice(0, 3).map((tag) =>
                <div
                  key={tag}
                  className="flex items-center rounded-full bg-accent/10 px-2 py-1 text-xs text-accent-foreground">

                      <Tag className="mr-1 h-3 w-3" />
                      {tag}
                    </div>
                )}
                </div>
              </CardContent>
            </Link>
          </Card>
        )}
      </div>

      {filteredPosts.length === 0 &&
      <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border py-16 text-center">
          <Search className="mb-4 h-12 w-12 text-muted-foreground" />
          <h3 className="mb-2 text-xl font-medium">No articles found</h3>
          <p className="mb-4 text-muted-foreground">
            Try adjusting your search or filter criteria
          </p>
          <Button onClick={() => {setSearchTerm("");setSelectedCategory("all");}}>
            Clear Filters
          </Button>
        </div>
      }

      {/* Newsletter Signup */}
      <div className="mt-16 rounded-xl bg-primary p-8 text-primary-foreground">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-3 font-heading text-2xl font-bold md:text-3xl">
            Subscribe to Our Travel Newsletter
          </h2>
          <p className="mb-6">
            Get the latest travel tips, destination guides, and exclusive offers
            delivered straight to your inbox.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Input
              type="email"
              placeholder="Your email address"
              className="border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/60" />

            <Button variant="secondary">Subscribe</Button>
          </div>
        </div>
      </div>
    </div>);

};

export default BlogPage;