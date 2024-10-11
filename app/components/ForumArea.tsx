'use client'

import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowUpCircle, ArrowDownCircle, MessageCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface Comment {
  id: number;
  author: string;
  content: string;
}

interface Post {
  id: number;
  title: string;
  author: string;
  content: string;
  upvotes: number;
  comments: Comment[];
}

const initialPosts: Post[] = [
  {
    id: 1,
    title: "What's your favorite programming language?",
    author: "TechEnthusiast",
    content: "I'm curious to know what programming languages everyone prefers and why. Share your thoughts!",
    upvotes: 42,
    comments: [
      { id: 1, author: "CodeWizard", content: "Python all the way! It's versatile and easy to read." },
      { id: 2, author: "JavaFan", content: "Java for its robustness and wide adoption in enterprise." }
    ],
  },
  {
    id: 2,
    title: "Tips for staying productive while working from home",
    author: "RemoteWorker",
    content: "Working from home can be challenging. What are your best tips for staying focused and productive?",
    upvotes: 38,
    comments: [
      { id: 1, author: "ProductivityGuru", content: "Create a dedicated workspace and stick to a routine!" },
    ],
  },
  {
    id: 1,
    title: "What's your favorite programming language?",
    author: "TechEnthusiast",
    content: "I'm curious to know what programming languages everyone prefers and why. Share your thoughts!",
    upvotes: 42,
    comments: [
      { id: 1, author: "CodeWizard", content: "Python all the way! It's versatile and easy to read." },
      { id: 2, author: "JavaFan", content: "Java for its robustness and wide adoption in enterprise." }
    ],
  },
  {
    id: 2,
    title: "Tips for staying productive while working from home",
    author: "RemoteWorker",
    content: "Working from home can be challenging. What are your best tips for staying focused and productive?",
    upvotes: 38,
    comments: [
      { id: 1, author: "ProductivityGuru", content: "Create a dedicated workspace and stick to a routine!" },
    ],
  },
  {
    id: 1,
    title: "What's your favorite programming language?",
    author: "TechEnthusiast",
    content: "I'm curious to know what programming languages everyone prefers and why. Share your thoughts!",
    upvotes: 42,
    comments: [
      { id: 1, author: "CodeWizard", content: "Python all the way! It's versatile and easy to read." },
      { id: 2, author: "JavaFan", content: "Java for its robustness and wide adoption in enterprise." }
    ],
  },
  {
    id: 2,
    title: "Tips for staying productive while working from home",
    author: "RemoteWorker",
    content: "Working from home can be challenging. What are your best tips for staying focused and productive?",
    upvotes: 38,
    comments: [
      { id: 1, author: "ProductivityGuru", content: "Create a dedicated workspace and stick to a routine!" },
    ],
  },
];

export default function ForumPage() {
  const [posts, setPosts] = useState(initialPosts);
  const [expandedPost, setExpandedPost] = useState<number | null>(null);
  const [newComment, setNewComment] = useState("");

  const toggleExpand = (postId: number) => {
    setExpandedPost(expandedPost === postId ? null : postId);
  };

  const addComment = (postId: number) => {
    if (newComment.trim() === "") return;

    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          comments: [
            ...post.comments,
            {
              id: post.comments.length + 1,
              author: "CurrentUser", // You might want to replace this with actual user data
              content: newComment.trim()
            }
          ]
        };
      }
      return post;
    }));

    setNewComment("");
  };

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-2xl mx-auto"> {/* This div centers and limits the width of the content */}
        <h1 className="text-3xl font-bold mb-6">Welcome back to forums, User.</h1>
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
              <CardFooter className="flex flex-col">
                <div className="flex justify-between w-full mb-2">
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">
                      <ArrowUpCircle className="mr-1" />
                      {post.upvotes}
                    </Button>
                    <Button variant="ghost" size="sm">
                      <ArrowDownCircle className="mr-1" />
                    </Button>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => toggleExpand(post.id)}>
                    <MessageCircle className="mr-1" />
                    {post.comments.length} Comments
                    {expandedPost === post.id ? <ChevronUp className="ml-1" /> : <ChevronDown className="ml-1" />}
                  </Button>
                </div>
                {expandedPost === post.id && (
                  <div className="w-full">
                    {post.comments.map((comment) => (
                      <div key={comment.id} className="border-t py-2">
                        <div className="flex items-center space-x-2 mb-1">
                          <Avatar>
                            <AvatarImage src={`/api/placeholder/24/24`} alt={comment.author} />
                            <AvatarFallback>{comment.author[0]}</AvatarFallback>
                          </Avatar>
                          <span className="text-sm font-semibold">{comment.author}</span>
                        </div>
                        <p className="text-sm">{comment.content}</p>
                      </div>
                    ))}
                    <div className="flex space-x-2 mt-2">
                      <Input
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Add a comment..."
                      />
                      <Button onClick={() => addComment(post.id)}>Post</Button>
                    </div>
                  </div>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}