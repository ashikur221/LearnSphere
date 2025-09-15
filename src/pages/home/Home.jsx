import ApartSection from '@/components/home/ApartSection'
import Banner from '@/components/home/Banner'
import BannerGallery from '@/components/home/BannerGallery'
import FuturesSection from '@/components/home/FuturesSection'
import React from 'react'

const Home = () => {
  return (
    <div className='section-padding-x'>
      <Banner />
      
      <BannerGallery />
      <FuturesSection />
      <ApartSection />
    </div>
  )
}

export default Home