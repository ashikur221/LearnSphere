import { GlobalNavLinks } from '@/utils/data'
import { ImageProvider } from '@/utils/ImageProvider'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {

  

  return (
    <div className='container mx-auto flex items-center justify-between my-4'>
      <div className="logo">
        <img src={ImageProvider.Navlogo} className='w-20' alt="" />
      </div>

      <div className="links bg-theme-primary py-3 px-4 rounded-full flex gap-10 text-white">
        {
          GlobalNavLinks.map((link) => (
            <NavLink className={({ isActive }) => `px-4 py-2 rounded-full ${isActive ? 'text-theme-primary bg-white ' : 'text-white'}`} to={link.link}>{link.name}</NavLink>
          ))
        }

      </div>

      <div className="cta-btn flex gap-10">
        <button className='bg-theme-primary text-white py-3 px-5 rounded-full'>Start Training</button>
        <button className='border border-theme-primary py-3 px-10 rounded-full'>Login</button>
      </div>
    </div>
  )
}

export default Navbar