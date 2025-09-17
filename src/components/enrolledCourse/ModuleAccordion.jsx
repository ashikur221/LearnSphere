import { CustomPlay, CustomQuizIcon } from "@/utils/IconProvider";
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

                        <div className="bg-theme-primary/10 flex flex-col items-center p-10 rounded-xl">
                            <CustomQuizIcon />
                            <p className="font-semibold text-xl my-2">Ready to test your knowledge?</p>
                            <div className="w-10/12 mx-auto space-y-2">
                                <p className="text-small-text">
                                    This quiz will assess your understanding of the concepts covered in this lesson. You must score 100% to pass.
                                </p>
                                <ul className="list-disc list-inside text-small-text">
                                    <li>20 questions covering key concepts from this lesson</li>
                                    <li>Time limit: 10 minutes</li>
                                    <li>Unlimited attempts until you achieve mastery</li>
                                    <li>Immediate feedback on your answers</li>
                                    <li>Required for course completion</li>
                                </ul>
                            </div>
                            <button className='bg-theme-primary w-full text-center text-white py-3 px-5 rounded  my-5 gap-1'>
                                Start Quiz
                            </button>
                        </div>
                        <p className="text-xs text-small-text my-4 text-center">© 2023 RBT Certification Course. All rights reserved.</p>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default ModuleAccordion;
