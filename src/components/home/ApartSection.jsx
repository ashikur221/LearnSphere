import { BadgeCustomIcon } from '@/utils/IconProvider';
import { ImageProvider } from '@/utils/ImageProvider';
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Points = [
    {
        id: 1,
        image: ImageProvider.expert,
        title: "Expert-led training",
        description: "Nearly a decade of ABA field experience."
    },
    {
        id: 2,
        image: ImageProvider.focus,
        title: "Practical focus",
        description: "Real-world scenarios prepare you for day one on the job."
    },
    {
        id: 3,
        image: ImageProvider.impact,
        title: "Practical focus",
        description: "Proceeds help fund a home for foster children."
    },
    {
        id: 4,
        image: ImageProvider.stick,
        title: "Learning that sticks",
        description: "Interactive modules, role-play, and gamified quizzes ."
    },
    {
        id: 4,
        image: ImageProvider.course,
        title: "More than a course",
        description: "Mentorship and career support beyond certification."
    }
]

const ApartSection = () => {
    return (
        <div className='container mx-auto section-padding-y'>
            <div className="main-content flex flex-col lg:flex-row justify-between">
                <div className="flex flex-col items-center lg:items-start xlg:space-y-10 w-full lg:w-1/2">
                    <div className="space-y-4 lg:space-y-2">
                        <div className="flex items-center justify-center lg:justify-start gap-4">
                            <div className="w-16 h-16 bg-theme-primary flex items-center justify-center p-2 rounded-full">
                                <BadgeCustomIcon />
                            </div>
                            <p className="xlg:text-lg text-big-text font-semibold">Guaranteed and certified</p>
                        </div>
                        <p className="text-2xl xlg:text-5xl font-bold text-center lg:text-start">
                            What Sets Us Apart
                        </p>

                        <div className="flex flex-col lg:flex-row items-center">
                            <button className="bg-theme-primary text-white py-3 px-5 rounded-full">
                                Start Your Course
                            </button>
                            <img src={ImageProvider.booked} alt="" />
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <Avatar className={"w-20 h-20"}>
                            <AvatarImage src={ImageProvider.avatar} />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <p className=" text-big-text">Online courses from the expert. </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xlg:gap-10 items-center w-full lg:w-1/2">
                    <div className="space-y-10">
                        {
                            Points.slice(0, 3)?.map((item) => (
                                <div className="space-y-4">
                                    <img src={item?.image} className='w-14' alt="" />
                                    <p className="xlg:text-2xl font-bold">{item?.title}</p>
                                    <p className="text-sm xlg:text-base text-small-text">
                                        {item?.description}
                                    </p>
                                    <div className="w-24 h-1 bg-theme-primary"></div>
                                </div>
                            ))
                        }
                    </div>

                    <div className="space-y-10">
                        {
                            Points?.slice(3, 5)?.map((item) => (
                                <div className="space-y-4">
                                    <img src={item?.image} className='w-14' alt="" />
                                    <p className="xlg:text-2xl font-bold">{item?.title}</p>
                                    <p className="text-sm xlg:text-base text-small-text">
                                        {item?.description}
                                    </p>
                                    <div className="w-24 h-1 bg-theme-primary"></div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApartSection;