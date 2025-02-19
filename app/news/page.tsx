'use client'

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { FiClock, FiHeart, FiShare2, FiBookmark } from 'react-icons/fi';
import Header from '../components/Header';

const NewsSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const trendingTopics = [
    { name: '#YouthEmpowerment', posts: 856 },
    { name: '#ClimateAction', posts: 743 },
    { name: '#DigitalLiteracy', posts: 652 },
    { name: '#CommunityService', posts: 589 },
    { name: '#MentalHealth', posts: 478 }
  ];

  const categories = ['All', 'Community', 'Environment', 'Education', 'Technology', 'Events'];

  const FeaturedArticle = () => (
    <div className="relative overflow-hidden rounded-2xl h-[500px] group">
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10" />
      <img // Need to use IMG tag here for responsive sizing
        src="/api/placeholder/1200/500"
        alt="Featured Article"
        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute bottom-0 left-0 right-0 z-20 p-6 text-white">
        <div className="flex items-center space-x-2 mb-3">
          <span className="px-3 py-1 text-sm bg-blue-600 rounded-full">Featured</span>
          <span className="text-sm opacity-75">5 min read</span>
        </div>
        <h1 className="text-3xl font-bold mb-3">Youth-Led Climate Initiative Transforms Local Community</h1>
        <p className="text-lg opacity-90 mb-4">How a group of passionate teenagers turned their environmental concerns into actionable change, inspiring communities worldwide.</p>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">JD</div>
            <span>John Doe</span>
          </div>
          <span className="opacity-75">|</span>
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-1 hover:text-blue-400">
              <FiHeart />
              <span>245</span>
            </button>
            <button className="flex items-center space-x-1 hover:text-blue-400">
              <FiShare2 />
              <span>Share</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const TrendingTopics = () => (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle>Trending Topics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {trendingTopics.map((topic, index) => (
            <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
              <span className="text-blue-600 font-medium">{topic.name}</span>
              <span className="text-sm text-gray-500">{topic.posts} posts</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  const newsItems = [
    {
      title: "Local Youth Center Launches Digital Skills Workshop",
      category: "Education",
      image: "/api/placeholder/400/250",
      readTime: "3 min",
      likes: 156,
    },
    {
      title: "Student-Led Startup Receives Major Funding",
      category: "Technology",
      image: "/api/placeholder/400/250",
      readTime: "4 min",
      likes: 203,
    },
    {
      title: "Community Garden Project Expands to Schools",
      category: "Environment",
      image: "/api/placeholder/400/250",
      readTime: "6 min",
      likes: 178,
    },
    {
      title: "Youth Mental Health Awareness Campaign",
      category: "Community",
      image: "/api/placeholder/400/250",
      readTime: "5 min",
      likes: 245,
    },
    {
      title: "Upcoming Youth Leadership Summit 2024",
      category: "Events",
      image: "/api/placeholder/400/250",
      readTime: "3 min",
      likes: 132,
    },
    {
      title: "New Online Platform Connects Young Volunteers",
      category: "Technology",
      image: "/api/placeholder/400/250",
      readTime: "4 min",
      likes: 167,
    },
  ];

  const NewsGrid = () => {
    const filteredNews = activeCategory === 'All' 
      ? newsItems 
      : newsItems.filter(item => item.category === activeCategory);

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNews.map((item, index) => (
          <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow">
            <div className="relative h-48">
              <img
                src={item.image}
                alt={item.title}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute top-3 left-3">
                <span className="px-3 py-1 text-sm bg-white rounded-full">{item.category}</span>
              </div>
            </div>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-1">
                    <FiClock className="w-4 h-4" />
                    <span>{item.readTime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FiHeart className="w-4 h-4" />
                    <span>{item.likes}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                    <FiBookmark className="w-4 h-4" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                    <FiShare2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };

  return (
    <>
    <Header />
    <div className="min-h-screen bg-gray-50 py-8">

      <div className="container mx-auto px-4">

        {/* Featured Article */}
        <section className="mb-12">
          <FeaturedArticle />
        </section>

        {/* Category Navigation */}
        <section className="mb-8">
          <div className="flex items-center space-x-4 overflow-x-auto py-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <NewsGrid />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <TrendingTopics />
            
            {/* Newsletter Subscription */}
            <Card className="bg-gradient-to-br from-blue-500 to-blue-700 text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
                <p className="mb-4 opacity-90">Get the latest news and updates delivered to your inbox.</p>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 placeholder-white/60 mb-3 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button className="w-full px-4 py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                  Subscribe
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default NewsSection;