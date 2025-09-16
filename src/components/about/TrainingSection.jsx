import { DecorationIcon } from '@/utils/IconProvider';
import React from 'react';
import ReactPlayer from "react-player"

const TrainingSection = () => {
    return (
        <div className='container mx-auto space-y-6 px-5'>
            <div className="flex justify-between">
                <div className="hidden md:block">
                    <DecorationIcon />
                </div>
                <div className="w-full md:w-[40%] text-center">
                    <p className="text-2xl font-bold md:text-3xl xlg:text-5xl ">
                        Your Training, Anytime – Watch & Learn
                    </p>
                    <p className="text-small-text mt-2 md:mt-4 text-sm md:text-base">
                        Access high-quality video lessons anytime, anywhere. Learn at your own pace with expert guidance designed to help you succeed.
                    </p>
                </div>
                <div className="hidden md:block">
                    <DecorationIcon />
                </div>
            </div>

            <div className="overflow-hidden rounded-tl-[8rem]  rounded-tr-[1rem]  rounded-bl-[4rem]  rounded-br-[4rem] shadow-lg">
                <ReactPlayer
                    src="https://www.youtube.com/watch?v=eVFzbxmKNUw&ab_channel=TEDxTalks"


                    width="100%"
                    height="400px"
                />
            </div>
        </div>
    );
};

export default TrainingSection;