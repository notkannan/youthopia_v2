'use client'

import React, { useState } from 'react';
import { useUser } from '@clerk/nextjs';
import PostList from './PostList';
import CreatePostButton from './CreatePostButton';
import CreatePostModal from './PostModal';
import { Post } from './types';
import Header from '../components/Header';
import Footer from '../components/Footer';

const initialPosts: Post[] = [
  {
    id: 1,
    title: "What's your favorite programming language?",
    author: "TechEnthusiast",
    content: "I'm curious to know what programming languages everyone prefers and why. Let me know chat",
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const currentUser = useUser();

  const addPost = (newPost: Omit<Post, 'id' | 'upvotes' | 'comments'>) => {
    const post: Post = {
      ...newPost,
      id: posts.length + 1,
      upvotes: 0,
      comments: []
    };
    setPosts([post, ...posts]);
    setIsModalOpen(false);
  };

  return (
    <>
    <Header />
    <div className="container mx-auto p-4 relative min-h-screen">
      <div className="max-w-2xl mx-auto pb-16">
        <h1 className="text-3xl font-bold mb-6">Welcome back to forums, {currentUser.user?.firstName}</h1>
        <PostList posts={posts} setPosts={setPosts} />
      </div>
      <CreatePostButton onClick={() => setIsModalOpen(true)} />
      {isModalOpen && <CreatePostModal onClose={() => setIsModalOpen(false)} onSubmit={addPost} />}
    </div>
    <Footer />
    </>
  );
}