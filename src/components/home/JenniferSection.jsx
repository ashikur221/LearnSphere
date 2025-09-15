import { BadgeCustomIcon } from '@/utils/IconProvider';
import { ImageProvider } from '@/utils/ImageProvider';
import React from 'react';

const JenniferSection = () => {
    return (
        <div className="section-padding-y">
            <div className='border container mx-auto border-black rounded-3xl flex flex-col lg:flex-row gap-10 items-center '>
                <div className="h-full  lg:w-1/2">
                    <img src={ImageProvider.jenny} className='object-fill h-full' alt="" />
                </div>

                <div className="lg:w-1/2">
                    <div className=" p-4">
                        <div className=" lg:justify-start gap-4">
                            <div className="w-10 h-10 bg-theme-primary flex items-center justify-center p-2 rounded-full">
                                <BadgeCustomIcon />
                            </div>

                        </div>
                        <div className="space-y-2 mt-2">
                            <p className="xlg:text-4xl text-big-text font-semibold">Jennifer Ventura</p>
                            <p className="text-sm text-small-text">M.S., BCBA</p>
                            <p className="text-sm text-small-text">
                                Jennifer Ventura, M.S., BCBA, brings nearly a decade of experience in Applied Behavior Analysis (ABA). She has partnered with families, educators, and therapists to deliver evidence-based strategies that empower neurodivergent children to grow and thrive.As both a professional and a parent, Jennifer understands the real challenges caregivers face and provides practical, compassionate guidance. Her approach is grounded in science, strengthened by faith, and driven by her mission to inspire hope and resilience in every family she serves . Jennifer is passionate about equipping the next generation of therapists with the tools they need to succeed, not just to pass an exam, but to make a lasting difference. She invites you to join this journey with patience, purpose, and confidence .
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JenniferSection;