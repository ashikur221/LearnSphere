import React from 'react'
import Statistics from '../dashboard/Statistics'
import { ImageProvider } from '@/utils/ImageProvider'

const Dashboard = () => {
  return (
    <div className='container mx-auto px-5'>
      <Statistics />
      <div className="grid grid-cols-2">
        <div className="border rounded-xl shadow-md">
          <div className="bg-theme-primary rounded-t-xl p-5 flex items-center gap-4">

            <div className="">
              <img src={ImageProvider.bacb2} alt="" />
            </div>

            <div className="">
              <p className="text-sm lg:text-2xl text-white font-bold">RBT Training Course</p>
              <p className="text-sm lg:text-base text-white">Career Track Program - 40 Hour Certification</p>
            </div>
          </div>
        </div>
        <div className=""></div>
      </div>
    </div>
  )
}

export default Dashboard