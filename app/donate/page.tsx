import { FC } from 'react'
import Donate from '../components/Donate'
import Footer from '../components/Footer'
import Header from '../components/Header'
import DonationReview from '../components/DonationReview'

const page: FC = ({}) => {
  return (
    <>
    <Header />
    <Donate />
    <DonationReview />
    <Footer />
    </>
  )
}

export default page