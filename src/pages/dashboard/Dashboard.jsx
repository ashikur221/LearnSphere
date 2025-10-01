import React, { useEffect, useRef } from 'react'
import { ImageProvider } from '@/utils/ImageProvider'
import { ArrowRight, Badge } from 'lucide-react'
import Statistics from '@/components/dashboard/Statistics';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

const Dashboard = () => {

    const keypoints = [
        "8 Comprehensive Learning Modules",
        "40 BACB Required Competencies",
        "Interactive Activities & Exercises",
        "Knowledge Assessments & Quizzes",
        "Expert Instructor Support",
        "Certificate of Completion"
    ]

    const sectionRef = useRef(null);
    useEffect(() => {
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
                ease: "power4.out"
            }
        )
    }, [])

    return (
        <div ref={sectionRef} className='container mx-auto px-5'>
            <Statistics />
            <div className="grid lg:grid-cols-2">
                <div className="border rounded-xl shadow-md">
                    <div className="bg-theme-primary rounded-t-xl p-5 flex items-center gap-4">

                        <div className="">
                            <img src={ImageProvider.bacb2} alt="" />
                        </div>

                        <div className="">
                            <p className="text-sm lg:text-2xl text-white font-bold">RBT Training Course</p>
                            <p className="text-sm lg:text-base text-white">Career Track Program - 40 Hour Certification</p>
                        </div>
                    </div>

                    <div className="flex p-5">
                        <div className="border-r-2 w-full lg:w-1/2 space-y-5 p-4">
                            <div className="">
                                <p className="text-sm lg:text-2xl text-big-text font-bold">
                                    About This Course
                                </p>
                                <p className="text-sm lg:text-base text-small-text">
                                    This comprehensive 40-hour training program
                                    covers all the required content areas specified
                                    by the Behavior Analyst Certification Board
                                    (BACB) for Registered Behavior Technician
                                    certification.
                                </p>
                            </div>

                            <div className="">
                                <p className="text-sm lg:text-lg text-big-text font-bold">
                                    Current Module: Data Collection
                                </p>
                                <p className="text-sm lg:text-base text-small-text">
                                    You're learning about measurement procedures and
                                    data recording techniques
                                </p>
                            </div>
                        </div>
                        <div className=" w-full lg:w-1/2 p-4">
                            <div className="">
                                <p className="text-sm lg:text-lg text-big-text font-bold">
                                    Current Module: Data Collection
                                </p>
                                {
                                    keypoints.map((point, index) => (
                                        <p key={index} className="text-sm my-2 lg:text-base text-small-text flex gap-2 items-center">
                                            <img src={ImageProvider.Tikk} alt="" />
                                            {point}
                                        </p>
                                    ))
                                }

                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between p-5 border-t ">
                        <div className="">
                            <p className="flex items-center gap-2"> <img src={ImageProvider.conf} /> BACB Approved Training Program</p>
                            <p className="">Last accessed: 2 days ago</p>
                        </div>
                        <div className="">
                            <Link to={'/enrolled-course'}>
                                <button className='bg-theme-primary text-white py-3 px-5 rounded flex items-center gap-1'><ArrowRight /> Start Training</button>
                            </Link>
                        </div>
                    </div>

                </div>
                <div className="">

                </div>
            </div>
        </div>
    );
};

export default Dashboard;