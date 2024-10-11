import { FC } from 'react'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Stats from '../components/Stats'
import CTA from '../components/CTA'
import Faqs from '../components/FAQ'
import Testimonial from '../components/Testimonial'
import Blog from '../components/Blog'

const Page: FC = ({}) => {
  return (
  <>
    <Hero />
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