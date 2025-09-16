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

const CourseVideoPlayer = ({ url, showThumbnail, thumbnail }) => {
    const [activeTab, setActiveTab] = useState("overview");

    // Tab content data
    const tabContent = {
        overview: {
            title: "Overview",
            content:
                "This comprehensive UI/UX Design course is designed for beginners and intermediate learners aiming to build a strong foundation in user-centered design. Through a blend of theory, hands-on projects, and real-world case studies, you'll learn to create intuitive, visually appealing, and functional digital experiences.",
        },
        notes: {
            title: "Notes",
            content:
                "Your personal notes will appear here. Add key takeaways, reminders, and important concepts as you progress through the course material.",
        },
        transcript: {
            title: "Transcript",
            content:
                "Full video transcript will be displayed here. Follow along with the spoken content and refer back to specific sections as needed.",
        },
    };

    return (
        <div className="w-full rounded-2xl overflow-hidden">
            <div className="min-h-[200px] lg:min-h-[350px] xl:h-[500px]">
                {showThumbnail ? (
                    <div className="min-h-[200px]">
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

            {!showThumbnail && (
                <>
                    <ul className="flex items-center lg:gap-5 mt-4 border-b border-gray-200 dark:border-gray-700">
                        {Object.keys(tabContent).map((tabKey) => (
                            <li
                                key={tabKey}
                                className={`${activeTab === tabKey
                                    ? "!border-theme-secondary !text-theme-secondary"
                                    : ""
                                    } px-4 lg:px-6 py-2 text-lg font-medium border-b-2 dark:text-[#abc2d3] text-[#424242] transition duration-300 border-transparent cursor-pointer`}
                                onClick={() => setActiveTab(tabKey)}
                            >
                                {tabContent[tabKey].title}
                            </li>
                        ))}
                    </ul>

                    {/* Tab Content */}
                    <div className="p-3 lg:p-4 bg-white dark:bg-gray-800">
                        <p className="text-gray-700 dark:text-gray-300">
                            {tabContent[activeTab].content}
                        </p>
                    </div>
                </>
            )}
        </div>
    );
};

export default CourseVideoPlayer;
