import { ImageProvider } from '@/utils/ImageProvider';
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { CustomTikIcon } from '@/utils/IconProvider';

const Statistics = () => {
    return (
        <div className='bg-theme-primary/20 rounded-2xl flex justify-between p-5 items-center my-4'>
            <div className="hidden  w-1/4 lg:flex justify-center">
                <img src={ImageProvider.student} alt="" />
            </div>
            <div className="  w-full lg:w-1/2 space-y-2">
                <p className="text-xl lg:text-3xl xlg:text-5xl font-bold">
                    Welcome Back, <span className="text-theme-primary">Jennifer !</span>
                </p>
                <div className="flex justify-between">
                    <p className="text-sm lg:text-2xl xlg:text-3xl font-semibold text-theme-primary">20% Complete</p>
                    <p className="text-small-text text-sm lg:text-lg font-medium">Tasks Completed</p>
                </div>
                <Progress value={40} />
                <p className="flex items-center gap-2 text-small-text text-sm lg:text-lg ">
                    <CustomTikIcon />
                    Your progress is very good!
                </p>

                <div className="bg-white rounded-sm text-sm lg:text-base lg:p-5 p-2 text-center text-small-text">
                    Keep going! You're on track to earn your next reward.
                </div>
            </div>
            <div className="hidden lg:flex flex-col justify-center w-1/4 items-center gap-4 ">
                <button className='bg-theme-primary/40 text-white py-2 w-fit px-4 rounded-full'>Your Badge</button>
                <img src={ImageProvider.badge} className='' alt="" />
                <p className="text-sm lg:text-lg text-small-text">First badge at 25%</p>
            </div>
        </div>
    );
};

export default Statistics;