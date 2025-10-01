import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { ImageProvider } from '@/utils/ImageProvider';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react';

const FeedbackSection = () => {

    const sectionRef = useRef(null);
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(
            sectionRef.current,
            {
                opacity: 0,
                y: 100
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 50%',
                    toggleActions: 'play none none none',
                    markers: false
                }
            }
        )
    }, [])

    return (
        <div ref={sectionRef} className='border-2 border-theme-primary/30 p-5 rounded-xl '>
            <p className="text-2xl font-bold md:text-3xl xlg:text-4xl">Student Feedback</p>

            <div className="my-10">
                <div className="text-sm text-small-text flex items-center justify-between">
                    <p className="">5 Stars</p>
                    <div className="w-10/12">
                        <Progress value={90} />
                    </div>
                    <p className="">92%</p>
                </div>
                <div className="text-sm text-small-text flex items-center justify-between">
                    <p className="">4 Stars</p>
                    <div className="w-10/12">
                        <Progress value={80} />
                    </div>
                    <p className="">92%</p>
                </div>
                <div className="text-sm text-small-text flex items-center justify-between">
                    <p className="">3 Stars</p>
                    <div className="w-10/12">
                        <Progress value={70} />
                    </div>
                    <p className="">92%</p>
                </div>
                <div className="text-sm text-small-text flex items-center justify-between">
                    <p className="">2 Stars</p>
                    <div className="w-10/12">
                        <Progress value={60} />
                    </div>
                    <p className="">92%</p>
                </div>
                <div className="text-sm text-small-text flex items-center justify-between">
                    <p className="">2 Stars</p>
                    <div className="w-10/12">
                        <Progress value={50} />
                    </div>
                    <p className="">92%</p>
                </div>
            </div>

            <div className="">
                <div className="grid grid-cols-2 gap-5 my-5">
                    <div className="flex items-center gap-1">
                        <Avatar className={"w-20 h-20"}>
                            <AvatarImage src={ImageProvider.avatar} />
                        </Avatar>
                        <div className="">
                            <p className=" text-big-text font-bold text-xl">Jennifer Ventura</p>
                            <p className="text-small-text">2 week ago</p>
                        </div>
                    </div>
                </div>
                <p className="text-sm lg:text-base">
                    The training was clear, practical, and interactive. I appreciated how the lessons connected directly to real-life situations I’ll face as an RBT. I feel confident and ready to begin my career in the ABA field.
                </p>
            </div>

        </div>
    );
};

export default FeedbackSection;