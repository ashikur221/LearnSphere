import { ImageProvider } from '@/utils/ImageProvider';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react';

const ProgramSection = () => {

    const imgRef = useRef(null);
    const desRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(
            imgRef.current,
            {
                x: 250,
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 30%",
                    toggleActions: "play none none none",
                    markers: false,
                },
            }
        )
        gsap.fromTo(
            desRef.current,
            {
                x: -250,
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 30%",
                    toggleActions: "play none none none",
                    markers: false,
                },
            }
        )
    }, [])

    return (
        <div>
            <div ref={containerRef} className="container mx-auto flex flex-col md:flex-row justify-center gap-5 lg:gap-10 items-center section-padding-y px-5">
                <div ref={imgRef} className="md:w-1/2">
                    <img src={ImageProvider.program} alt="" className='w-[300px] md:w-[500px]' />
                </div>
                <div ref={desRef} className="md:w-1/2 space-y-5">
                    <p className="text-2xl font-bold md:text-3xl xlg:text-5xl">About Our Program</p>
                    <p className="text-small-text mt-2 md:mt-4 text-xs  md:text-sm ">
                        Our 40-hour RBT training program is fully online, flexible, and designed to meet BACB® requirements. With expert instruction and practical resources, we make it simple for you to start your journey toward RBT certification.
                    </p>
                    <div className="grid grid-cols-3 gap-3 ">
                        <div className="px-5">
                            <p className="text-2xl font-bold md:text-3xl xlg:text-4xl">2.6k</p>
                            <p className="text-small-text mt-2 md:mt-4 text-sm md:text-base">Successfully Trained</p>
                        </div>
                        <div className="border-l-2 border-r-2 border-dashed px-5">
                            <p className="text-2xl font-bold md:text-3xl xlg:text-4xl">2.6k</p>
                            <p className="text-small-text mt-2 md:mt-4 text-sm md:text-base">Certificate Earned</p>
                        </div>
                        <div className="px-5">
                            <p className="text-2xl font-bold md:text-3xl xlg:text-4xl">2.6k</p>
                            <p className="text-small-text mt-2 md:mt-4 text-sm md:text-base">Learners Enrolled</p>
                        </div>
                    </div>
                    <button className='bg-theme-primary text-white py-3 px-5 rounded-full'>Enroll Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProgramSection;