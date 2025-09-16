import CourseBanner from '@/components/course/CourseBanner';
import CourseModuleSidebar from '@/components/enrolledCourse/CourseModuleSidebar';
import { courseModules } from '@/utils/data';
import React from 'react';

const CoursePage = () => {
    return (
        <div>
            <CourseBanner />
            <div className="flex flex-col lg:flex-row gap-5 m-5 min-h-screen container mx-auto">

                

                <div className="w-full lg:w-1/4">
                    <CourseModuleSidebar
                        modules={courseModules}
                        // activeLessonId={activeLessonId}
                        // onSelectLesson={handleSelectVideo}
                    />
                </div>
            </div>
        </div>
    );
};

export default CoursePage;