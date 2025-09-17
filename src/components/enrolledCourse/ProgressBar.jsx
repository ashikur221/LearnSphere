import React, { useState } from "react";

const ProgressBar = () => {
    const [progress, setProgress] = useState(60);
    const [isLoading, setIsLoading] = useState(false);

    // eslint-disable-next-line no-unused-vars
    const handleStartLoading = () => {
        if (isLoading) {
            setProgress(0);
            setIsLoading(false);
        }

        setProgress(0);
        setIsLoading(true);
    };

    return (
        <>
            <div className="flex items-center justify-center w-full gap-[10px]">
                <div className="relative  bg-gray-200 w-full lg:w-[100%] h-[10px] rounded-full">
                    <div
                        className="absolute top-0 left-0 bg-theme-primary h-full rounded-full"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>

               
            </div>
        </>
    );
};

export default ProgressBar;
