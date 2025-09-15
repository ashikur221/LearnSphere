import { ImageProvider } from '@/utils/ImageProvider';
import React from 'react';

const MissionSection = () => {
    return (
        <div className='bg-[#f0fbf7] py-10'>
            <div className="container mx-auto flex flex-col items-center lg:flex-row">
                <div className="lg:w-1/2">
                    <img src={ImageProvider.mission} alt="" />
                </div>
                <div className="lg:w-1/2">
                    <p className="text-2xl xlg:text-5xl font-semibold my-10">
                        The {" "}
                        <span className="text-theme-primary relative inline-block">
                            Mission
                            <svg
                                className="absolute  left-0 w-full"
                                viewBox="0 0 100 10"
                                preserveAspectRatio="none"
                            >
                                <path
                                    d="M0,5 Q40,1 100,5"
                                    stroke="#fbbf24"
                                    strokeWidth="2"
                                    fill="transparent"
                                />
                            </svg>
                        </span>
                        {" "}
                        Behind This Course
                    </p>
                    <p className="text-sm lg:text-base text-big-text text-justify">
                        At Futures Behavior Analysis, your learning goes beyond certification. A portion of every enrollment directly supports our long-term goal of establishing a safe and nurturing home for foster children.We believe education and compassion should work hand-in-hand. By joining our program, you’re not only advancing your career in ABA, you’re also helping to create stability, opportunity, and hope for children who need it most.Your success builds futures
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MissionSection;