import { GlobalNavLinks } from '@/utils/data'
import { ImageProvider } from '@/utils/ImageProvider'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {



  return (
    <div className=' bg-white my-4'>
      <div className="container  mx-auto   flex items-center justify-between px-2">
        <div className="logo">
          <img src={ImageProvider.Navlogo} className='w-20' alt="" />
        </div>

        <div className="links ml-20 bg-theme-primary py-3 px-4 rounded-full flex gap-4 xlg:gap-10 text-white">
          {
            GlobalNavLinks.map((link) => (
              <NavLink className={({ isActive }) => `px-4 py-2 rounded-full ${isActive ? 'text-theme-primary bg-white ' : 'text-white'}`} to={link.link}>{link.name}</NavLink>
            ))
          }

        </div>

        <div className="cta-btn flex gap-3 xlg:gap-10">
          <Link to={'/dashboard'} className='cursor-pointer'>
            <button className='bg-theme-primary cursor-pointer text-white py-3 px-5 rounded-full'>Start Training</button>
          </Link>
          <button className='border border-theme-primary py-3 px-10 rounded-full'>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar