import Banner from '@/components/home/Banner'
import BannerGallery from '@/components/home/BannerGallery'
import React from 'react'

const Home = () => {
  return (
    <div className='container mx-auto'>
      <Banner />
      <BannerGallery />
    </div>
  )
}

export default Home