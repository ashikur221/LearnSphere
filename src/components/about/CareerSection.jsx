import { ImageProvider } from '@/utils/ImageProvider';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react';

const CareerSection = () => {

    const titleRef = useRef(null);
    const sectionRef = useRef(null);
    const keyPointRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(
            titleRef.current,
            {
                opacity: 0,
                x: 50,
            },
            {
                opacity: 1,
                x: 0,
                duration: 1.5,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 20%",
                    toggleActions: "play none none none",
                    markers: false
                }
            }
        )

        gsap.fromTo(
            keyPointRef.current,
            {
                opacity: 0,
                x: 50,
            },
            {
                opacity: 1,
                x: 0,
                duration: 1.5,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 20%",
                    toggleActions: "play none none none",
                    markers: false
                }
            }
        )
    }, [])

    return (
        <div ref={sectionRef} className='relative section-padding-y'>
            <div className="">
                <img src={ImageProvider.flower} className='absolute top-0 left-0 w-[150px] xlg:w-[200px]' alt="" />
                <div className="w-[75%] mx-auto  space-y-5 my-10">
                    <div ref={titleRef} className="flex flex-col lg:flex-row items-center">
                        <p className="text-2xl font-bold md:text-3xl xlg:text-4xl lg:w-1/2">Build a Career That Changes Lives</p>
                        <p className="text-small-text mt-2 md:mt-4 text-xs  md:text-sm  lg:w-1/2">
                            Our BACB-aligned RBT course is designed to prepare you for real-world success in Applied Behavior Analysis. Through interactive lessons, real-life case scenarios, and expert guidance, you’ll gain the confidence and skills to make an impact from day one on the job.
                        </p>
                    </div>

                    <div ref={keyPointRef} className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-10">
                        <div className="">
                            <div className="w-10 h-10 text-white bg-theme-primary flex items-center justify-center p-2 rounded-full">
                                01
                            </div>
                            <p className="text-big-text mt-2 md:mt-4 text-base md:text-xl xlg:text-2xl font-semibold">Enroll in the Course</p>
                            <p className="text-small-text mt-2 md:mt-4 text-xs  md:text-sm">
                                Enroll online in just a few minutes. All you need is to be 18+ with a high school diploma (or equivalent).
                            </p>
                        </div>

                        <div className="">
                            <div className="w-10 h-10 text-white bg-theme-primary flex items-center justify-center p-2 rounded-full">
                                02
                            </div>
                            <p className="text-big-text mt-2 md:mt-4 text-base md:text-xl xlg:text-2xl font-semibold">
                                Start Learning
                            </p>
                            <p className="text-small-text mt-2 md:mt-4 text-xs  md:text-sm">
                                Access 40 hours of interactive training at your own pace. Practice with role-play scenarios, quizzes, and real ABA strategies.
                            </p>
                        </div>

                        <div className="">
                            <div className="w-10 h-10 text-white bg-theme-primary flex items-center justify-center p-2 rounded-full">
                                03
                            </div>
                            <p className="text-big-text mt-2 md:mt-4 text-base md:text-xl xlg:text-2xl font-semibold">
                                Earn Your Certificate
                            </p>
                            <p className="text-small-text mt-2 md:mt-4 text-xs  md:text-sm">
                                Finish strong and receive your BACB®-compliant certificate of completion, the first step to becoming a Registered Behavior Technician.
                            </p>
                        </div>
                    </div>
                </div>
                <img src={ImageProvider.flower2} className='absolute bottom-0 right-0 w-[150px] xlg:w-[200px]' alt="" />
            </div>



        </div>
    );
};

export default CareerSection;