import { CustomTikIcon } from '@/utils/IconProvider';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react';

const LearnSection = () => {

    const LearnPoints = [
        "Master core ABA measurement techniques.",
        "Master professional documentation and session notes.",
        "Conduct ethical preference assessments and FBAs.",
        "Apply skills in immersive, real-world scenarios.",
        "Implement skill-acquisition plans using DTT and NET.",
        "Prepare to pass the RBT exam on your first attempt.",
        "Develop behavior-reduction interventions and strategies."
    ]

    const sectionRef = useRef(null);
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(
            sectionRef.current,
            {
                opacity: 0,
                scale: 0.7
            },
            {
                opacity: 1,
                scale: 1,
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
            <p className="text-2xl font-bold md:text-3xl xlg:text-4xl">What You’ll Learn</p>
            <div className="grid grid-cols-2 gap-5 my-5">
                {
                    LearnPoints.map((item, index) =>
                        <div className='flex gap-4'>
                            <CustomTikIcon />
                            <p className='text-sm xlg:text-base text-big-text' key={index}>{item}</p>
                        </div>
                    )}
            </div>
        </div>
    );
};

export default LearnSection;