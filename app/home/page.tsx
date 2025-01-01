'use client';

import { useAuth } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Header from '../components/Header';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { FaRunning, FaHandHoldingHeart, FaComments, FaNewspaper, FaBullhorn } from 'react-icons/fa';
import { UserButton } from '@clerk/nextjs';

const commonStyles = {
  navCard: "transition-all duration-200 hover:shadow-lg hover:-translate-y-1 cursor-pointer",
  headerText: "text-2xl font-semibold tracking-tight text-gray-900",
  statsText: "text-4xl font-bold text-blue-600",
  subtleText: "text-sm text-gray-500",
};

const NavigationCard = ({ icon: Icon, title, count, subtitle, href }) => (
  <Card className={commonStyles.navCard} onClick={() => window.location.href = href}>
    <CardContent className="p-6">
      <div className="flex items-center space-x-4">
        <div className="p-3 bg-blue-100 rounded-full">
          <Icon className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <div className="mt-1 text-2xl font-bold text-blue-600">{count}</div>
          <p className="text-sm text-gray-500">{subtitle}</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

const BlogPreview = () => (
  <Card>
    <CardHeader>
      <CardTitle>Latest Blog Posts</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        {[
          { title: "10 Ways to Make a Difference", date: "2 hours ago", likes: 24 },
          { title: "Community Spotlight: Youth Leaders", date: "1 day ago", likes: 89 },
          { title: "Upcoming Events This Month", date: "2 days ago", likes: 156 },
        ].map((post, index) => (
          <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
            <div>
              <h4 className="font-medium text-gray-900">{post.title}</h4>
              <p className="text-sm text-gray-500">{post.date}</p>
            </div>
            <div className="flex items-center space-x-1 text-gray-500">
              <span>❤️</span>
              <span className="text-sm">{post.likes}</span>
            </div>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

const ActivityFeed = () => (
  <Card>
    <CardHeader>
      <CardTitle>Recent Activity</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        {[
          { user: "Sarah", action: "started a new activity", time: "5m ago" },
          { user: "Mike", action: "donated to Clean Ocean Project", time: "1h ago" },
          { user: "Lisa", action: "posted in Forums", time: "2h ago" },
        ].map((activity, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
              {activity.user[0]}
            </div>
            <div className="flex-1">
              <p className="text-sm">
                <span className="font-medium text-gray-900">{activity.user}</span>{" "}
                <span className="text-gray-500">{activity.action}</span>
              </p>
              <p className="text-xs text-gray-400">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

const Dashboard = () => {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isSignedIn) {
      router.push('/');
    }
  }, [isSignedIn, router]);
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className={commonStyles.headerText}>Welcome Back!</h1>
        </div>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <NavigationCard
            icon={FaRunning}
            title="Activities"
            count="28"
            subtitle="Active projects"
            href="/activities"
          />
          <NavigationCard
            icon={FaHandHoldingHeart}
            title="Donate"
            count="$2.4k"
            subtitle="Total donations"
            href="/donate"
          />
          <NavigationCard
            icon={FaComments}
            title="Forums"
            count="156"
            subtitle="New messages"
            href="/forums"
          />
          <NavigationCard
            icon={FaNewspaper}
            title="News"
            count="12"
            subtitle="Unread articles"
            href="/news"
          />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="space-y-6">
            <BlogPreview />
          </div>
          <div className="space-y-6">
            <ActivityFeed />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;