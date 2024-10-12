import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowUpCircle, ArrowDownCircle, MessageCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { Post } from './types';

interface PostCardProps {
  post: Post;
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

export default function PostCard({ post, setPosts }: PostCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [newComment, setNewComment] = useState("");

  const toggleExpand = () => setIsExpanded(!isExpanded);

  const addComment = () => {
    if (newComment.trim() === "") return;

    setPosts(posts => posts.map(p => {
      if (p.id === post.id) {
        return {
          ...p,
          comments: [
            ...p.comments,
            {
              id: p.comments.length + 1,
              author: "CurrentUser",
              content: newComment.trim()
            }
          ]
        };
      }
      return p;
    }));

    setNewComment("");
  };

  return (
    <Card>
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
          <Button variant="ghost" size="sm" onClick={toggleExpand}>
            <MessageCircle className="mr-1" />
            {post.comments.length} Comments
            {isExpanded ? <ChevronUp className="ml-1" /> : <ChevronDown className="ml-1" />}
          </Button>
        </div>
        {isExpanded && (
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
              <Button onClick={addComment}>Post</Button>
            </div>
          </div>
        )}
      </CardFooter>
    </Card>
  );
}