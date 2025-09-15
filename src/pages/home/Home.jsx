import ApartSection from '@/components/home/ApartSection'
import Banner from '@/components/home/Banner'
import BannerGallery from '@/components/home/BannerGallery'
import CertifiedSection from '@/components/home/CertifiedSection'
import FuturesSection from '@/components/home/FuturesSection'
import JenniferSection from '@/components/home/JenniferSection'
import Testimonial from '@/components/home/Testimonial'
import React from 'react'

const Home = () => {
  return (
    <div className='section-padding-x'>
      <Banner />

      <BannerGallery />
      <FuturesSection />
      <ApartSection />
      <CertifiedSection />
      <JenniferSection />
      <Testimonial />
    </div>
  )
}

export default Home