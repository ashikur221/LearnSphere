import { CustomPlay } from "@/utils/IconProvider";
import { Video, Clock } from "lucide-react";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { MdQuiz } from "react-icons/md";
import { Link } from "react-router-dom";

const ModuleAccordion = ({ module, activeLessonId, onSelectLesson }) => {
    const [isAccordingOpen, setIsAccordingOpen] = useState(0);

    const handleClick = (index) =>
        setIsAccordingOpen((prevIndex) => (prevIndex === index ? null : index));

    return (
        <div className="flex gap-3 flex-col w-full">
            <article className="border bg-white px-4 dark:border-slate-700 border-border rounded py-3">
                {/* Header */}
                <div
                    className="flex gap-2 cursor-pointer items-center justify-between w-full"
                    onClick={() => handleClick(module.id)}
                >
                    <div className="space-y-2">
                        <h2 className="font-semibold lg:text-xl">{module.title}</h2>
                        <p className="text-sm text-small-text">{module?.overview}</p>
                    </div>
                    <FaChevronDown
                        className={`text-[1.2rem] dark:text-slate-600 text-text transition-all duration-300 ${isAccordingOpen === module.id &&
                            "rotate-180 !text-theme-secondary"
                            }`}
                    />
                </div>

                {/* Accordion Content */}
                <div
                    className={`grid transition-all duration-300 overflow-hidden ease-in-out ${isAccordingOpen === module.id
                        ? "grid-rows-[1fr] opacity-100 mt-4"
                        : "grid-rows-[0fr] opacity-0"
                        }`}
                >
                    <div className="overflow-hidden">
                        {module.lessons.map((lesson, index) => (
                            <div
                                key={lesson.id}
                                className={`p-3 rounded mb-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition cursor-pointer ${activeLessonId === lesson.id
                                    ? "bg-theme-secondary/20"
                                    : "bg-white dark:bg-slate-800"
                                    }`}
                                onClick={() => onSelectLesson(lesson)}
                            >
                                {/* Top Row */}
                                <div className="flex items-center gap-3 mb-2">
                                    
                                    <span className="text-sm sm:text-base">{lesson.title}</span>
                                </div>

                                {/* Bottom Row */}
                                <div className="flex items-center justify-between text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                                    <div className="flex items-center gap-1">
                                        {lesson.duration}
                                    </div>
                                    <Link
                                        to={`/student-dashboard/all-quiz/2`}
                                        className="flex items-center gap-1 hover:underline"
                                    >
                                        <CustomPlay />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </article>
        </div>
    );
};

export default ModuleAccordion;
