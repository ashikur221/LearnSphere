import Banner from '@/components/home/Banner'
import BannerGallery from '@/components/home/BannerGallery'
import FuturesSection from '@/components/home/FuturesSection'
import React from 'react'

const Home = () => {
  return (
    <div className='  '>
      <Banner />
      <BannerGallery />
      <FuturesSection />
    </div>
  )
}

export default Home