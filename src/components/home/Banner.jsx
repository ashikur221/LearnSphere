import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const Banner = ({ data, isLoading }) => {
    const dots = [
        { color: "bg-red-500", position: "top-10 left-2" },
        { color: "bg-purple-500", position: "top-20 right-2" },
        { color: "bg-yellow-500", position: "top-52 right-1/2" },
        { color: "bg-blue-500", position: "bottom-20 left-10" },
    ];

    const textRef = useRef(null);
    console.log(data?.home_title[0]?.title)

    useEffect(() => {
        gsap.fromTo(
            textRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, ease: "power4.out" }
        )
    }, [])

    if (isLoading) {
        return (
            <div className="relative lg:w-11/12 mx-auto space-y-5 py-5 animate-pulse">
                {dots.map((dot, i) => (
                    <span
                        key={i}
                        className={`hidden sm:block absolute w-3 h-3 rounded-full ${dot.color} ${dot.position}`}
                    ></span>
                ))}

                {/* Title skeleton */}
                <div className="h-10 lg:h-16 bg-gray-300 rounded-md w-3/4 mx-auto"></div>
                <div className="h-10 lg:h-16 bg-gray-200 rounded-md w-2/3 mx-auto"></div>

                {/* Subtitle skeleton */}
                <div className="lg:w-1/2 mx-auto">
                    <div className="h-4 bg-gray-200 rounded-md w-full"></div>
                </div>

                {/* Button skeletons */}
                <div className="flex justify-center gap-5">
                    <div className="h-12 w-32 bg-gray-300 rounded-full"></div>
                    <div className="h-12 w-40 bg-gray-200 rounded-full"></div>
                </div>
            </div>
        )
    }

    return (
        <div className="relative lg:w-11/12 mx-auto space-y-5 py-5">
            {dots.map((dot, i) => (
                <span
                    key={i}
                    className={`hidden sm:block absolute w-3 h-3 rounded-full ${dot.color} ${dot.position}`}
                ></span>
            ))}
            {/* <p ref={textRef} className="text-center lg:leading-[5rem] text-4xl lg:text-7xl font-bold container mx-auto relative">
                Become a Certified Registered Behavior Technician{" "}
                <span className="text-theme-primary relative inline-block">
                    RBT
                    <svg
                        className="absolute -bottom-2 left-0 w-full"
                        viewBox="0 0 100 10"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M0,5 Q40,-2 100,5"
                            stroke="#fbbf24"
                            strokeWidth="2"
                            fill="transparent"
                        />
                    </svg>
                </span>{" "}
                – Complete Your{"  "}
                <span className="text-theme-primary relative inline-block">
                    {" "}
                    40-Hour
                    <svg
                        className="absolute -bottom-2 left-0 w-full"
                        viewBox="0 0 100 10"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M0,5 Q50,-1 100,5"
                            stroke="#fbbf24"
                            strokeWidth="2"
                            fill="transparent"
                        />
                    </svg>
                </span>{" "}
                Training Online
            </p> */}

            <p ref={textRef} dangerouslySetInnerHTML={{ __html: data?.home_title[0]?.title }} className="text-center lg:leading-[5rem] text-4xl lg:text-7xl font-bold container mx-auto relative">

            </p>

            <div className="lg:w-1/2 mx-auto">
                <p className="text-small-text text-center ">
                    {data?.home_title[0]?.subtitle}
                </p>
            </div>

            <div className="flex justify-center gap-5">
                <button className="bg-theme-primary text-white py-3 px-5 rounded-full">
                    {data?.home_title[0]?.btn_1}
                </button>
                <button className="border border-theme-primary text-theme-primary py-3 px-10 rounded-full">
                    {data?.home_title[0]?.btn_2}
                </button>
            </div>
        </div>
    );
};

export default Banner;
