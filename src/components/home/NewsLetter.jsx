import { ImageProvider } from '@/utils/ImageProvider';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react';

const NewsLetter = () => {

    const newsRef = useRef(null);
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(
            newsRef.current,
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
                    trigger: newsRef.current,
                    start: "top 30%",
                    toggleActions: "play none none none",
                    markers: false,
                },
            }
        )
    }, [])

    return (
        <div ref={newsRef} className="relative w-full overflow-hidden section-padding-y container mx-auto ">
            {/* Background Image */}
            <div className="w-full h-full">
                <img
                    src={ImageProvider.newsletter}
                    alt="Newsletter background"
                    className="w-full h-full rounded-3xl object-cover min-h-[300px] md:min-h-[200px]"
                />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-8 p-4 md:p-8">
                <div className="w-full max-w-2xl text-center lg:text-start">
                    <p className="text-2xl font-bold md:text-4xl xlg:text-5xl">
                        Secure your future, <br />
                        <span className="text-theme-primary">
                            Today!
                        </span>
                    </p>
                    <p className="text-sm mt-2 md:mt-4 md:text-base xlg:text-xl text-small-text">
                        Enter your E-mail, and our team will reach out to guide you through the next steps.
                    </p>
                </div>

                <div className="w-full max-w-xl">
                    <div className="bg-white rounded-full p-1.5 md:p-2 flex flex-col sm:flex-row gap-2 sm:gap-4 w-full">
                        <input
                            type="text"
                            className="bg-transparent outline-none flex-grow px-4 py-2 md:py-3 text-sm md:text-base"
                            placeholder="Enter your email address"
                        />
                        <button className='bg-theme-primary text-sm md:text-base text-white py-2 px-4 md:py-3 md:px-6 rounded-full whitespace-nowrap'>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;