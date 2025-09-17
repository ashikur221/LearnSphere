import React, { useState } from "react";
import ReactPlayer from "react-player";
import {
    MediaController,
    MediaControlBar,
    MediaTimeRange,
    MediaTimeDisplay,
    MediaVolumeRange,
    MediaPlaybackRateButton,
    MediaPlayButton,
    MediaSeekBackwardButton,
    MediaSeekForwardButton,
    MediaMuteButton,
    MediaFullscreenButton,
} from "media-chrome/react";
import { ImageProvider } from "@/utils/ImageProvider";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Clock, Eye } from "lucide-react";
import TranscriptTab from "./TranscriptTab";
import ResourceTab from "./ResourceTab";

const CourseVideoPlayer = ({ url, showThumbnail, thumbnail, selectedLesson }) => {
    const [activeTab, setActiveTab] = useState("transcript");
    console.log(selectedLesson)

    // Tab content data
    const tabContent = {

        transcript: {
            title: "Lesson Transcript",
            content: [
                {
                    title: "Introduction to ABA",
                    content: `Applied Behavior Analysis (ABA) is a scientific approach to understanding behavior and how it is affected by the environment. ABA focuses on applying interventions based on principles of learning theory to improve socially significant behaviors.Key Point: ABA is evidence-based, meaning that its methods are derived from scientific research and data collection. It's not just a collection of techniques, but a systematic approach to understanding and changing behavior.`
                },
                {
                    title: "The History of ABA",
                    content: `ABA has its roots in behaviorism, a school of thought founded by John B. Watson in the early 20th century. However, it was B.F. Skinner's work on operant conditioning that provided the foundation for what would become Applied Behavior Analysis.
                    In the 1960s, researchers like Ivar Lovaas began applying behavior analysis principles to help children with autism, demonstrating that behavior could be shaped and changed through systematic intervention.
                    Definition: Operant ConditioningA learning process through which the strength of a behavior is modified by reinforcement or punishment. It's a fundamental concept in ABA that explains how consequences influence behavior.
                    Core Principles of ABA
                    `
                },
                {
                    title: "Introduction to ABA",
                    content: `Applied Behavior Analysis (ABA) is a scientific approach to understanding behavior and how it is affected by the environment. ABA focuses on applying interventions based on principles of learning theory to improve socially significant behaviors.Key Point: ABA is evidence-based, meaning that its methods are derived from scientific research and data collection. It's not just a collection of techniques, but a systematic approach to understanding and changing behavior.`
                },
                {
                    title: "The History of ABA",
                    content: `ABA has its roots in behaviorism, a school of thought founded by John B. Watson in the early 20th century. However, it was B.F. Skinner's work on operant conditioning that provided the foundation for what would become Applied Behavior Analysis.
                    In the 1960s, researchers like Ivar Lovaas began applying behavior analysis principles to help children with autism, demonstrating that behavior could be shaped and changed through systematic intervention.
                    Definition: Operant ConditioningA learning process through which the strength of a behavior is modified by reinforcement or punishment. It's a fundamental concept in ABA that explains how consequences influence behavior.
                    Core Principles of ABA
                    `
                }
            ]
        },
        resources: {
            title: "Resources",
            content: [
                {
                    title: "Introduction to ABA",
                    content: `A comprehensive overview of Applied Behavior Analysis principles and techniques.`,
                    pages: 15,
                },
                {
                    title: "Introduction to ABA",
                    content: `A comprehensive overview of Applied Behavior Analysis principles and techniques.`,
                    pages: 15,
                },
                {
                    title: "Introduction to ABA",
                    content: `A comprehensive overview of Applied Behavior Analysis principles and techniques.`,
                    pages: 15,
                },

            ]
        },
    };

    return (
        <div className="w-full rounded-2xl overflow-hidden">
            <div className="min-h-[200px] lg:min-h-[350px] xl:h-[500px]">
                {showThumbnail ? (
                    <div className="min-h-[50vh] flex justify-center items-center border rounded-xl">
                        <p className="text-5xl font-bold text-center">
                            Select a video to play
                        </p>
                    </div>
                ) : (
                    <MediaController
                        style={{
                            width: "100%",
                            aspectRatio: "16/9",
                        }}
                    >
                        <ReactPlayer
                            slot="media"
                            src={url}
                            controls={false}
                            style={{
                                width: "100%",
                                height: "100%",
                                "--controls": "none",
                            }}
                        ></ReactPlayer>
                        <MediaControlBar>
                            <MediaPlayButton />
                            <MediaSeekBackwardButton seekOffset={10} />
                            <MediaSeekForwardButton seekOffset={10} />
                            <MediaTimeRange />
                            <MediaTimeDisplay showDuration />
                            <MediaMuteButton />
                            <MediaVolumeRange />
                            <MediaPlaybackRateButton />
                            <MediaFullscreenButton />
                        </MediaControlBar>
                    </MediaController>
                )}
            </div>

            <div className="Lesson Details space-y-4 pt-10">
                <div className="space-y-5">
                    <h2 className="text-2xl font-semibold mt-4">{selectedLesson?.title}</h2>
                    <p className=" dark:text-gray-300">{selectedLesson?.overview}</p>
                </div>
                <div className="flex gap-5 items-center">
                    <div className="flex items-center gap-1">
                        <Avatar className={"w-20 h-20"}>
                            <AvatarImage src={ImageProvider.avatar} />
                        </Avatar>
                        <div className="">
                            <p className=" text-big-text font-bold text-xl">Jennifer Ventura</p>
                            <p className="text-small-text">BCBA Instructor</p>
                        </div>
                    </div>
                    <span className=' p-2 rounded-full flex gap-2'><Eye className="text-small-text" />1.2k <span className="text-small-text">Students enrolled</span> </span>
                    <span className=' p-2 rounded-full flex gap-2'><Clock className="text-small-text" /> 1.2k <span className="text-small-text">Students enrolled</span> </span>
                </div>
            </div>

            {!showThumbnail && (
                <div className="shadow-2xl border rounded-xl">
                    <ul className="flex items-center lg:gap-5 mt-4 border-b border-gray-200 dark:border-gray-700">
                        {Object.keys(tabContent).map((tabKey) => (
                            <li
                                key={tabKey}
                                className={`${activeTab === tabKey
                                    ? "!border-theme-secondary !text-theme-primary"
                                    : ""
                                    } px-4 lg:px-6 py-2 text-lg font-medium border-b-2 dark:text-[#abc2d3] text-[#424242] transition duration-300 border-transparent cursor-pointer`}
                                onClick={() => setActiveTab(tabKey)}
                            >
                                {tabContent[tabKey].title}
                            </li>
                        ))}
                    </ul>

                    {/* Tab Content */}
                    <div className="p-3 lg:p-4 bg-white dark:bg-gray-800  ">
                        {
                            tabContent[activeTab].title === "Lesson Transcript" ?
                                <TranscriptTab transcript={tabContent[activeTab].content} />
                                :
                                <ResourceTab resources={tabContent[activeTab].content} />

                        }
                    </div>
                </div>
            )}
        </div>
    );
};

export default CourseVideoPlayer;
