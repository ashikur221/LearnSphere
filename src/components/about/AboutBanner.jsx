import { ImageProvider } from '@/utils/ImageProvider';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react';

const AboutBanner = () => {

    const titleRef = useRef(null);
    const descRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            titleRef.current,
            {
                opacity: 0,
                y: 50,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: "power3.out",
            }
        )
        
        gsap.fromTo(
            descRef.current,
            {
                opacity: 0,
                y: 50,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: "power3.out",
            }
        )
    }, [])

    return (
        <div>
            <div className="relative w-full overflow-hidden ">
                {/* Background Image */}
                <div className="w-full h-full">
                    <img
                        src={ImageProvider.aboutBanner}
                        alt="Newsletter background"
                        className="w-full h-full  object-cover min-h-[300px] md:min-h-[400px]"
                    />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col lg:flex-row items-center justify-center md:justify-start gap-6 md:gap-8 p-4 md:p-8">
                    <div className="w-full max-w-4xl text-center lg:text-start space-y-5">
                        <p ref={titleRef} className="text-2xl text-white font-bold md:text-4xl lg:text-5xl">
                            Who We Are & What We Do
                        </p>
                        <p ref={descRef} className="text-sm mt-2 md:mt-4 md:text-base lg:text-xl text-white">
                            We provide accessible and affordable online training to help you become a Certified RBT. Our 40-hour course is designed to meet BACB® requirements and prepare you with the skills and confidence to succeed.
                        </p>
                        <button className='bg-theme-primary text-white py-3 px-5 rounded-full'>Start Training</button>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default AboutBanner;