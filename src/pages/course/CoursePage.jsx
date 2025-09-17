import CourseBanner from '@/components/course/CourseBanner';
import CourseModuleSidebar from '@/components/enrolledCourse/CourseModuleSidebar';
import { courseModules } from '@/utils/data';
import React from 'react';
import LearnSection from './LearnSection';
import PriceSection from './PriceSection';
import { ScrollRestoration } from 'react-router-dom';
import InstructorSection from './InstructorSection';
import FeedbackSection from './FeedbackSection';
import FAQSection from './FAQSection';
import { CustomLock } from '@/utils/IconProvider';

const CoursePage = () => {
    return (
        <div>
            <ScrollRestoration />
            <CourseBanner />
            <div className="flex flex-col lg:flex-row gap-5 m-5 min-h-screen container mx-auto px-5 my-10 xlg:my-20">
                <div className="w-full lg:w-[60%] space-y-5">
                    <LearnSection />
                    <PriceSection />
                    <InstructorSection />
                    <FeedbackSection />
                    <FAQSection />
                </div>


                <div className="w-full lg:w-[40%]">
                    <CourseModuleSidebar
                        modules={courseModules}
                    // activeLessonId={activeLessonId}
                    // onSelectLesson={handleSelectVideo}
                    />
                    <div className="bg-white shadow-lg flex flex-col items-center p-10 rounded-xl my-10">
                        <CustomLock />
                        <p className="font-semibold text-xl my-2">Enroll to Access All Course Content</p>
                        <div className="w-10/12 mx-auto space-y-2">
                            <p className="text-small-text text-center">
                                Get full access to all modules, lessons, and resources to become a certified Registered Behavior Technician.
                            </p>

                        </div>
                        <button className='bg-theme-primary w-full text-center text-white py-3 px-5 rounded  my-5 gap-1'>
                            Enroll Now
                        </button>
                         <p className="text-xs text-small-text my-4 text-center">© 2023 RBT Certification Course. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoursePage;