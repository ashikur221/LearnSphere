import React from "react";

// react icons
import { CgFacebook } from "react-icons/cg";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { ImageProvider } from "@/utils/ImageProvider";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white ">
      <div className="grid grid-cols-1 px-5 md:grid-cols-3 lg:grid-cols-4 gap-10 container mx-auto">

        <div className="">
          <img src={ImageProvider.Navlogo} alt="" />
          <div className="flex text-black flex-col gap-[10px]">
            <p className="text-2xl font-bold text-theme-primary">Futures Behavior Analysis</p>
            <p className="text-[0.9rem] dark:text-slate-400 text-[#424242] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
              Our Registered Behavior Technician (RBT) course is designed for ease of use, packed with interactive games, and provides an immediate certificate upon completion .
            </p>
          </div>
          <div className="flex items-center gap-[10px] my-4 text-[#424242]">
            <Link to={"/"} className="text-[1.3rem] p-1.5 cursor-pointer bg-gray-200 rounded-full text-theme-primary dark:text-slate-400 transition-all duration-300">
              <CgFacebook />
            </Link>
            <Link className="text-[1.2rem] p-1.5 cursor-pointer rounded-full bg-gray-200  text-theme-primary dark:text-slate-400 transition-all duration-300">
              <BsTwitter />
            </Link>
            <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full bg-gray-200  text-theme-primary dark:text-slate-400 transition-all duration-300">
              <BsInstagram />
            </a>
            <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full bg-gray-200  text-theme-primary dark:text-slate-400 transition-all duration-300">
              <BsLinkedin />
            </a>
          </div>
        </div>


        <div>
          <h3 className="text-[1.2rem] dark:text-[#abc2d3] font-semibold text-big-text mb-2">Contact Us</h3>
          <div className="flex text-black flex-col gap-[10px]">
            <p className="text-[0.9rem] dark:text-slate-400 text-small-text hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
              Phone: 954-556-5254
            </p>
            <p className="text-[0.9rem] dark:text-slate-400 text-small-text hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
              E-mail: info@futuresba.com
            </p>

            <p className="text-[0.9rem] dark:text-slate-400 text-small-text hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
              6825 Taft Street, Suite 123, Hollywood Fl 33024
            </p>

          </div>
        </div>

        <div>
          <h3 className="text-[1.2rem] dark:text-[#abc2d3] font-semibold text-big-text mb-2">Quick access</h3>
          <div className="flex text-black flex-col gap-[10px]">
            <p className="text-[0.9rem] dark:text-slate-400 text-small-text hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
              Home
            </p>
            <p className="text-[0.9rem] dark:text-slate-400 text-small-text hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
              About
            </p>

            <p className="text-[0.9rem] dark:text-slate-400 text-small-text hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
              Course
            </p>
            <p className="text-[0.9rem] dark:text-slate-400 text-small-text hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
              Contact
            </p>

          </div>
        </div>

        <div>
          <h3 className="text-[1.2rem] dark:text-[#abc2d3] font-semibold text-big-text mb-2">Subscribe</h3>
          <div className="flex text-black flex-col gap-[10px]">
            <p className="text-[0.9rem] dark:text-slate-400 text-small-text hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
              Subscribe to stay updated on new ABA trainings, professional resources, and opportunities to grow your skills as an RBT or BCBA. Be the first to know when new courses and mentorship programs launch
            </p>
            <div className="bg-gray-100 rounded-full p-3">
              <input type="text" className="bg-transparent outline-none" placeholder="Enter your email address" />
            </div>
            <button className="bg-theme-primary text-white py-3 px-4 rounded-full w-fit">Subscribe Now</button>

          </div>
        </div>
      </div>

      <div
        className="border-t px-5 bg-theme-primary border-gray-200 dark:border-slate-700 py-5  mt-[40px] flex items-center justify-between w-full flex-wrap text-white">

        <div className="container mx-auto flex justify-between">
          <p className="text-[0.9rem] "> privacy policy | terms & conditions </p>
          <p className="text-[0.9rem] "> all copyright © 2022 reserved </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer