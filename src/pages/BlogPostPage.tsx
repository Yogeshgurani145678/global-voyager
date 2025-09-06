import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar1 as Calendar, Clock, Share2, Facebook, Twitter, Linkedin, ChevronLeft, ChevronRight, Tag } from









"lucide-react";
import { blogPosts } from "@/data/blogPosts";
import { formatDate } from "@/lib/utils";
import NotFoundPage from "./NotFoundPage";

const BlogPostPage = () => {
  const { slug } = useParams<{slug: string;}>();
  const [post, setPost] = useState(blogPosts.find((p) => p.slug === slug));
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="container mx-auto flex min-h-[60vh] items-center justify-center px-4 py-8">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
          <p className="mt-4 text-muted-foreground">Loading article...</p>
        </div>
      </div>);

  }

  if (!post) {
    return <NotFoundPage />;
  }

  // Find the current post index and get next/previous posts
  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost =
  currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  // Get related posts (same category or shared tags)
  const relatedPosts = blogPosts.
  filter(
    (p) =>
    p.id !== post.id && (
    p.category === post.category ||
    p.tags.some((tag) => post.tags.includes(tag)))
  ).
  slice(0, 3);

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <div className="relative h-[50vh] w-full overflow-hidden">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="h-full w-full object-cover" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white md:p-12">
          <div className="container mx-auto">
            <div className="flex flex-wrap items-center gap-2">
              <Link to="/blog" className="text-white/80 hover:text-white">
                Blog
              </Link>
              <ChevronRight className="h-4 w-4 text-white/60" />
              <Link
                to={`/blog?category=${post.category}`}
                className="text-white/80 hover:text-white">

                {post.category}
              </Link>
            </div>
            <h1 className="mt-2 font-heading text-3xl font-bold text-shadow-lg md:text-5xl">
              {post.title}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-6">
              <div className="flex items-center">
                <Avatar className="mr-2 h-8 w-8">
                  <AvatarImage src={post.author.avatar} alt={post.author.name} />
                  <AvatarFallback>
                    {post.author.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <span>{post.author.name}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="mr-1 h-5 w-5" />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center">
                <Clock className="mr-1 h-5 w-5" />
                <span>{post.readTime} min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-4xl">
          {/* Article Content */}
          <div className="prose prose-lg mx-auto max-w-none dark:prose-invert">
            {post.content.split("\n").map((paragraph, index) => {
              if (paragraph.startsWith("# ")) {
                return (
                  <h1 key={index} className="font-heading text-3xl font-bold">
                    {paragraph.substring(2)}
                  </h1>);

              } else if (paragraph.startsWith("## ")) {
                return (
                  <h2 key={index} className="font-heading text-2xl font-bold">
                    {paragraph.substring(3)}
                  </h2>);

              } else if (paragraph.startsWith("### ")) {
                return (
                  <h3 key={index} className="font-heading text-xl font-bold">
                    {paragraph.substring(4)}
                  </h3>);

              } else if (paragraph.trim() === "") {
                return <br key={index} />;
              } else {
                return <p key={index}>{paragraph}</p>;
              }
            })}
          </div>

          {/* Tags */}
          <div className="mt-8">
            <h3 className="mb-3 text-lg font-medium">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) =>
              <Badge key={tag} variant="outline" className="flex items-center gap-1">
                  <Tag className="h-3 w-3" />
                  {tag}
                </Badge>
              )}
            </div>
          </div>

          {/* Share */}
          <div className="mt-8 border-t border-border pt-6">
            <h3 className="mb-3 text-lg font-medium">Share this article</h3>
            <div className="flex space-x-2">
              <Button variant="outline" size="icon" className="rounded-full">
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Share on Facebook</span>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Share on Twitter</span>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">Share on LinkedIn</span>
              </Button>
              <Button variant="outline" className="ml-2">
                <Share2 className="mr-2 h-4 w-4" />
                Copy Link
              </Button>
            </div>
          </div>

          {/* Author */}
          <div className="mt-8 rounded-xl border border-border bg-card p-6">
            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <Avatar className="h-16 w-16">
                <AvatarImage src={post.author.avatar} alt={post.author.name} />
                <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="text-center sm:text-left">
                <h3 className="text-xl font-bold">{post.author.name}</h3>
                <p className="mt-1 text-muted-foreground">
                  Travel writer and photographer with a passion for exploring
                  off-the-beaten-path destinations. Has visited over 50
                  countries across 6 continents.
                </p>
              </div>
            </div>
          </div>

          {/* Post Navigation */}
          <div className="mt-8 grid grid-cols-1 gap-4 border-t border-border pt-6 sm:grid-cols-2">
            {prevPost &&
            <Link
              to={`/blog/${prevPost.slug}`}
              className="group flex items-center rounded-lg border border-border p-4 transition-colors hover:border-primary hover:bg-primary/5">

                <ChevronLeft className="mr-2 h-5 w-5" />
                <div>
                  <span className="text-sm text-muted-foreground">
                    Previous Article
                  </span>
                  <h4 className="font-medium group-hover:text-primary">
                    {prevPost.title}
                  </h4>
                </div>
              </Link>
            }
            {nextPost &&
            <Link
              to={`/blog/${nextPost.slug}`}
              className="group flex items-center justify-end rounded-lg border border-border p-4 text-right transition-colors hover:border-primary hover:bg-primary/5">

                <div>
                  <span className="text-sm text-muted-foreground">
                    Next Article
                  </span>
                  <h4 className="font-medium group-hover:text-primary">
                    {nextPost.title}
                  </h4>
                </div>
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            }
          </div>
        </div>

        {/* Related Posts */}
        <div className="mt-16">
          <h2 className="mb-6 font-heading text-2xl font-bold">
            You Might Also Like
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedPosts.map((relatedPost) =>
            <Card key={relatedPost.id} className="overflow-hidden">
                <Link to={`/blog/${relatedPost.slug}`} className="group block">
                  <div className="relative h-48 overflow-hidden">
                    <img
                    src={relatedPost.imageUrl}
                    alt={relatedPost.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />

                    <div className="absolute top-3 right-3">
                      <Badge className="bg-primary hover:bg-primary/90">
                        {relatedPost.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <h3 className="mb-2 font-heading text-lg font-bold group-hover:text-primary">
                      {relatedPost.title}
                    </h3>
                    <p className="mb-4 text-sm text-muted-foreground">
                      {relatedPost.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="mr-1 h-3 w-3" />
                        {formatDate(relatedPost.date)}
                      </div>
                      <div className="flex items-center">
                        <Clock className="mr-1 h-3 w-3" />
                        {relatedPost.readTime} min read
                      </div>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>);

};

export default BlogPostPage;