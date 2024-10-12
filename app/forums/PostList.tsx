import React from 'react';
import PostCard from './PostCard';
import { Post } from './types';

interface PostListProps {
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

export default function PostList({ posts, setPosts }: PostListProps) {
  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} setPosts={setPosts} />
      ))}
    </div>
  );
}