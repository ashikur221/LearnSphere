import CourseModuleSidebar from '@/components/enrolledCourse/CourseModuleSidebar';
import CourseVideoPlayer from '@/components/enrolledCourse/CourseVideoPlayer';
import { courseModules } from '@/utils/data';
import React, { useState } from 'react';
import { ScrollRestoration } from 'react-router-dom';

const EnrolledCourse = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [selectedLesson, setSelectedLesson] = useState(null);
    const [activeLessonId, setActiveLessonId] = useState(null);




    const handleSelectVideo = (lesson) => {
        setSelectedLesson(lesson)
        if (lesson?.url) {
            setSelectedVideo(lesson.url);
            setActiveLessonId(lesson.id);
        }
    };
    return (
        <div className="flex flex-col lg:flex-row gap-5  min-h-screen container mx-auto">
            <ScrollRestoration />
            <div className="w-full lg:w-[60%]">
                <CourseVideoPlayer
                    url={selectedVideo}
                    showThumbnail={!selectedVideo}
                    thumbnail={""}
                    selectedLesson={selectedLesson}
                />
            </div>

            <div className="w-full lg:w-[40%]">
                <CourseModuleSidebar
                    modules={courseModules}
                    activeLessonId={activeLessonId}
                    onSelectLesson={handleSelectVideo}
                />
            </div>
        </div>
    );
};

export default EnrolledCourse;