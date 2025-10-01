import React, { useEffect, useRef } from 'react';
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from '../ui/button';
import { ImageProvider } from '@/utils/ImageProvider';
import { CustomGoal, CustomMission, CustomVision } from '@/utils/IconProvider';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const CardComponent = ({ data }) => {
    return (
        <Card className="w-full ">
            <CardHeader>
                <CardTitle>
                    <div className="w-10 h-10 text-white  flex items-center justify-center p-2 rounded-full">
                        <img src={data?.keypoint} alt="" />
                    </div>
                </CardTitle>
                <CardDescription className={'flex justify-center '}>
                    <div className="w-14 h-14 bg-[#EDF8FD] text-white  flex items-center justify-center p-2 rounded-full">
                        {data?.icon}
                    </div>
                </CardDescription>

            </CardHeader>
            <CardContent>
                <div className="text-center">
                    <p className="text-xl xlg:text-3xl font-bold">
                        {data?.title}
                    </p>
                    <p className="text-sm text-small-text mt-2">
                        {data?.description}
                    </p>
                </div>
            </CardContent>
            <CardFooter className="flex-col gap-2">

            </CardFooter>
        </Card>
    )
}



const CommitmentSection = () => {

    const Data = [
        {
            id: 1,
            title: 'Our Vision',
            description: 'Our vision is to prepare the next generation of Registered Behavior Technicians with the knowledge and confidence to support children and families through compassionate, evidence-based care.',
            keypoint: ImageProvider.one,
            icon: <CustomVision />
        },
        {
            id: 2,
            title: 'Our Mission',
            description: 'Our mission is to provide engaging, BACB®-aligned training that combines real-world practice, mentorship, and career support — ensuring every student is ready to succeed in the field of Applied Behavior Analysis.',
            keypoint: ImageProvider.two,
            icon: <CustomMission />
        },
        {
            id: 3,
            title: 'Our Goal',
            description: 'Our goal is to open doors to meaningful careers in ABA, while giving back to the community. A portion of proceeds helps fund a future home for foster children — so your success builds brighter futures for others too.',
            keypoint: ImageProvider.three,
            icon: <CustomGoal />
        }
    ]
    const sectionRef = useRef(null);
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(
            sectionRef.current,
            {
                y: 100,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 30%",
                    toggleActions: "play none none none",
                    markers: false
                }
            }
        )
    }, [])

    return (
        <div ref={sectionRef} className='container mx-auto px-5'>
            <div className="w-full lg:w-[55%] mx-auto text-center">
                <p className="text-2xl font-bold md:text-3xl xlg:text-5xl ">
                    Our Commitment to Building Brighter Futures
                </p>
                <p className="text-small-text mt-2 md:mt-4 text-sm md:text-base">
                    We are committed to providing top-quality RBT training that empowers future behavior technicians to make an immediate impact. Our vision is to create a pathway to success through knowledge, skill, and compassion.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
                {
                    Data.map((data) => (
                        <CardComponent key={data.id} data={data} />
                    ))
                }
            </div>
        </div>
    );
};

export default CommitmentSection;