'use client';

import { useAuth } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Stats from './components/Stats';
import CTA from './components/CTA';
import Faqs from './components/FAQ';
import Testimonial from './components/Testimonial';

export default function Home() {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) {
      router.push('/home');
    }
  }, [isSignedIn, router]);

  return (
    <>
      <Hero />
      <CTA />
      <Stats />
      <Testimonial />
      <Faqs />
      <Footer />
    </>
  );
}
