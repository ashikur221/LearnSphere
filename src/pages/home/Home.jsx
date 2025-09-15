import ApartSection from '@/components/home/ApartSection'
import Banner from '@/components/home/Banner'
import BannerGallery from '@/components/home/BannerGallery'
import CertifiedSection from '@/components/home/CertifiedSection'
import FuturesSection from '@/components/home/FuturesSection'
import JenniferSection from '@/components/home/JenniferSection'
import MissionSection from '@/components/home/MissionSection'
import NewsLetter from '@/components/home/NewsLetter'
import Testimonial from '@/components/home/Testimonial'
import React from 'react'

const Home = () => {
  return (
    <div className=''>
      <Banner />

      <BannerGallery />
      <FuturesSection />
      <ApartSection />
      <CertifiedSection />
      <JenniferSection />
      <Testimonial />
      <NewsLetter />
      <MissionSection />
    </div>
  )
}

export default Home