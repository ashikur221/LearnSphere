import { ImageProvider } from '@/utils/ImageProvider';
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react';

const InstructorSection = () => {
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
                ease: "power4.out",
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
            <p className="text-2xl font-bold md:text-3xl xlg:text-4xl">Your Instructor</p>
            <div className="grid grid-cols-2 gap-5 my-5">
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
            <p className="text-sm lg:text-base">
                Jennifer Ventura, M.S., BCBA, brings nearly a decade of experience in Applied Behavior Analysis (ABA). She has partnered with families, educators, and therapists to deliver evidence-based strategies that empower neurodivergent children to grow and thrive.As both a professional and a parent, Jennifer understands the real challenges caregivers face and provides practical, compassionate guidance. Her approach is grounded in science, strengthened by faith, and driven by her mission to inspire hope and resilience in every family she serves . Jennifer is passionate about equipping the next generation of therapists with the tools they need to succeed, not just to pass an exam, but to make a lasting difference. She invites you to join this journey with patience, purpose, and confidence .
            </p>
        </div>
    );
};

export default InstructorSection;