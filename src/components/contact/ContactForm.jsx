import { ImageProvider } from '@/utils/ImageProvider';
import React from 'react';
import { useForm } from 'react-hook-form';
import { BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { CgFacebook } from 'react-icons/cg';
import { Link } from 'react-router-dom';


const ContactForm = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className='contact-form container mx-auto px-5 section-padding-y'>
            <div className="flex flex-col-reverse md:flex-row gap-14">
                <div className="md:w-1/2 w-full space-y-5">
                    <div className="bg-theme-primary/10  rounded-2xl">
                        <img src={ImageProvider.contact} alt="" />
                    </div>
                    <div className="flex flex-col md:flex-row justify-between">
                        <div className="">
                            <p className="text-base text-small-text">Phone: 954-556-5254</p>
                            <p className="text-base text-small-text">E-mail: info@futuresba.com</p>
                            <p className="text-base text-small-text">6825 Taft Street, Suite 123, Hollywood Fl 33024</p>
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
                </div>
                <div className=" md:w-1/2 w-full">
                    <p className="text-2xl text-big-text font-bold md:text-4xl xlg:text-5xl">Let’s get in touch</p>
                    <p className="text-small-text mt-2 md:mt-4 text-sm md:text-base">
                        Or just reach out manually to <span className="text-theme-primary">example@gmail.com</span>
                    </p>
                    <form onSubmit={handleSubmit(onSubmit)} className='mt-5 space-y-5'>
                        <div className="">
                            <label>First name</label>
                            <div className="border rounded-full p-3">
                                <input {...register('firstName')} type="text" className="bg-transparent w-full outline-none" placeholder="input your first name" />
                            </div>
                        </div>

                        <div className="">
                            <label>Last name</label>
                            <div className="border rounded-full p-3">
                                <input {...register('lastName')} type="text" className="bg-transparent w-full outline-none" placeholder="input your last name" />
                            </div>
                        </div>

                        <div className="">
                            <label>Email</label>
                            <div className="border rounded-full p-3">
                                <input {...register('email')} type="email" className="bg-transparent w-full outline-none" placeholder="input your email" />
                            </div>
                        </div>

                         <div className="">
                            <label>Phone Number</label>
                            <div className="border rounded-full p-3">
                                <input {...register('phone')} type="text" className="bg-transparent w-full outline-none" placeholder="input your phone" />
                            </div>
                        </div>

                         <div className="">
                            <label>Description</label>
                            <div className="border rounded-2xl p-3">
                                <textarea {...register('description')} type="text" rows={5} className="bg-transparent w-full outline-none" placeholder="Message here" />
                            </div>
                        </div>

                        <button className='bg-theme-primary hover:bg-blue-400 text-white py-3 px-5 w-full rounded-full'>Send</button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;