import { CustomStar } from '@/utils/IconProvider';
import { ImageProvider } from '@/utils/ImageProvider';
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';

const CourseBanner = () => {

    const sectionRef = useRef(null);
    useEffect(()=>{
        gsap.fromTo(
            sectionRef.current,
            {
                opacity:0,
                scale: 0.7
            },
            {
                opacity:1,
                scale: 1,
                duration: 1,
                ease: "power4.out"
            }
        )
    })

    return (
        <div ref={sectionRef} className='bg-gradient-to-r from-theme-primary/10 to-white py-20'>
            <div className="container mx-auto flex flex-col md:flex-row px-5">
                <div className="md:w-3/4">

                    <img src={ImageProvider.bacb} alt="" />
                    <p className="text-2xl font-bold md:text-4xl lg:text-5xl">RBT Certification: The 40-Hour Training Program</p>
                    <p className="text-big-text mt-2 md:mt-4 text-xs  md:text-lg ">
                        Get certified, ace your exam on the first try, and learn in-demand skills with our expert-led, interactive training. Learn at your own pace—no experience required. Master the material through immersive scenarios and unlimited practice quizzes, all within a supportive platform designed to build your confidence.
                    </p>
                    <div className="flex flex-col lg:flex-row gap-3 my-4">
                        <span className='bg-[#20B486]/10 text-[#20B486] p-2 rounded-full'>Personalized mentorship with quick responses</span>
                        <span className='bg-[#0A9FE0]/10 text-[#0A9FE0] p-2 rounded-full'>100% First-Time Pass Focus</span>
                        <span className='bg-[#0A9FE0]/10 text-[#0A9FE0] p-2 rounded-full'>Self-Paced Learning</span>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-3 my-4">
                        <span className=' p-2 rounded-full'>
                            <span className="flex gap-2">
                                {
                                    Array.from({ length: 5 }).map((_, index) => (
                                        <CustomStar key={index} />
                                    ))
                                }
                                4.9 <span className="text-small-text">(2.1 k reviews )</span>
                            </span>
                        </span>
                        <span className=' p-2 rounded-full'>1.2k <span className="text-small-text">Students enrolled</span> </span>
                        <span className=' p-2 rounded-full'> <span className="text-small-text">Last updated</span> august 25 </span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Avatar className={"w-20 h-20"}>
                            <AvatarImage src={ImageProvider.avatar} />
                        </Avatar>
                        <div className="">
                            <p className=" text-big-text font-bold text-xl">Jennifer Ventura</p>
                            <p className="text-small-text">BCBA Instructor</p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <img src={ImageProvider.certificate} alt="" />
                </div>
            </div>
        </div>
    );
};

export default CourseBanner;