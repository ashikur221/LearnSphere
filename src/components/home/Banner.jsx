import React from "react";

const Banner = () => {
    const dots = [
        { color: "bg-red-500", position: "top-10 left-2" },
        { color: "bg-purple-500", position: "top-20 right-2" },
        { color: "bg-yellow-500", position: "top-52 right-1/2" },
        { color: "bg-blue-500", position: "bottom-20 left-10" },
    ];

    return (
        <div className="relative lg:w-11/12 mx-auto space-y-5 py-5">
            {dots.map((dot, i) => (
                <span
                    key={i}
                    className={`hidden sm:block absolute w-3 h-3 rounded-full ${dot.color} ${dot.position}`}
                ></span>
            ))}
            <p className="text-center lg:leading-[5rem] text-4xl lg:text-7xl font-bold container mx-auto relative">
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
            </p>

            <div className="lg:w-1/2 mx-auto">
                <p className="text-small-text text-center ">
                    BACB-aligned, interactive training that builds confident, skilled
                    therapists — creating lasting impact for children and families.To
                    enroll, you must be 18+ and have a high school diploma (or equivalent).
                    That’s it!
                </p>
            </div>

            <div className="flex justify-center gap-5">
                <button className="bg-theme-primary text-white py-3 px-5 rounded-full">
                    Start Training
                </button>
                <button className="border border-theme-primary text-theme-primary py-3 px-10 rounded-full">
                    Login
                </button>
            </div>
        </div>
    );
};

export default Banner;
