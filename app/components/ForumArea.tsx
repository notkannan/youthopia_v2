import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ArrowUpCircle, ArrowDownCircle, MessageCircle } from 'lucide-react';

interface Post {
  id: number;
  title: string;
  author: string;
  content: string;
  upvotes: number;
  comments: number;
}

const posts: Post[] = [
  {
    id: 1,
    title: "What's your favorite programming language?",
    author: "TechEnthusiast",
    content: "I'm curious to know what programming languages everyone prefers and why. Share your thoughts!",
    upvotes: 42,
    comments: 15,
  },
  {
    id: 2,
    title: "Tips for staying productive while working from home",
    author: "RemoteWorker",
    content: "Working from home can be challenging. What are your best tips for staying focused and productive?",
    upvotes: 38,
    comments: 22,
  },
  // Add more sample posts as needed
];

export default function ForumArea() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Welcome to Forums, User</h1>
      <div className="space-y-4">
        {posts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <div className="flex items-center space-x-2">
                <Avatar>
                  <AvatarImage src={`/api/placeholder/32/32`} alt={post.author} />
                  <AvatarFallback>{post.author[0]}</AvatarFallback>
                </Avatar>
                <span className="text-sm text-gray-500">Posted by {post.author}</span>
              </div>
            </CardHeader>
            <CardContent>
              <p>{post.content}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm">
                  <ArrowUpCircle className="mr-1" />
                  {post.upvotes}
                </Button>
                <Button variant="ghost" size="sm">
                  <ArrowDownCircle className="mr-1" />
                </Button>
              </div>
              <Button variant="ghost" size="sm">
                <MessageCircle className="mr-1" />
                {post.comments} Comments
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}