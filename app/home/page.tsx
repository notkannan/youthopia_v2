'use client'

import { FC } from 'react'
import { useAuth } from '@clerk/nextjs'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Stats from '../components/Stats'
import CTA from '../components/CTA'
import Faqs from '../components/FAQ'
import Testimonial from '../components/Testimonial'
import Blog from '../components/Blog'
import Header from '../components/Header'

const Page: FC = ({}) => {
  const { userId } = useAuth();

  return (
  <>
    {
      userId && <Header />
    }
    {
      !userId && <Hero />
    }
    <Blog />
    <CTA />
    <Stats />
    <Testimonial />
    <Faqs />
    <Footer />
  </>
  )

}

export default Page;