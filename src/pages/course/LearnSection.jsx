import { CustomTikIcon } from '@/utils/IconProvider';
import React from 'react';

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

    return (
        <div className='border-2 border-theme-primary/30 p-5 rounded-xl '>
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