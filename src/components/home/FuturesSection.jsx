import { ImageProvider } from '@/utils/ImageProvider';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react';

const Card = ({
    children,
    className = ""
}) => <div className={`rounded-2xl  p-12 text-sm leading-7 text-gray-700  shadow-black/5 dark:bg-gray-950 dark:text-gray-300 dark:shadow-white/5 ${className}`}>
        {children}
    </div>;

const Badge = ({
    children,
    className = ""
}) => <span className={`inline-flex items-center rounded-full bg-sky-100 px-2.5 py-0.5 text-xs font-medium text-sky-800 dark:bg-sky-900/30 dark:text-sky-300 ${className}`}>
        {children}
    </span>;

const data = [{
    id: "1",
    title: "BACB Approved 40-Hour Course",
    description: "Fully compliant with BACB requirements and standards."
}, {
    id: "2",
    title: "Gamified Learning Experience",
    description: "Badges, leaderboards, and achievements keep you motivated."
}, {
    id: "3",
    title: "Flexible Learning",

    description: "Complete your training in up to 180 days at your own pace."
}, {
    id: "4",
    title: "instant Certificate Download",
    description: "Get your certificate immediately upon course completion."
}];

const FuturesSection = () => {

    const imgRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.fromTo(
            imgRef.current,
            { opacity: 0, x: 150 },
            {
                opacity: 1, x: 0, duration: 1, ease: "power4.out",
                scrollTrigger: {
                    trigger: imgRef.current,
                    start: 'top 90%',
                    toggleActions: 'play none none none',
                    markers: false,
                }
            }
        )
        gsap.fromTo(
            textRef.current,
            { opacity: 0, y: 150 },
            {
                opacity: 1, y: 0, duration: 1, ease: "power4.out", scrollTrigger: {
                    trigger: textRef.current,
                    start: 'top 90%',
                    toggleActions: 'play none none none',
                    markers: false,
                }
            }
        )
    }, [])

    return (
        <div className='container mx-auto bg-blue-50  flex flex-col md:flex-row px-5 items-center justify-center rounded-l-4xl gap-10 py-10 mt-10'>
            <div className="">
                <div ref={imgRef} className="rounded-full">
                    <img src={ImageProvider.dotted} className='absolute hidden md:block' alt="" />
                    <img src={ImageProvider.futureImg} className='rounded-full w-[300px] lg:w-[500px]' alt="" />
                </div>
            </div>

            <div ref={textRef} className="">

                <div>
                    <p className="text-2xl md:text-4xl font-bold text-theme-primary ">Futures{" "}
                        <span className="text-theme-primary relative inline-block">
                            {" "}
                            Behavior Analysis
                            <svg
                                className="absolute lg:-bottom-8 left-0 w-full"
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
                        </span>
                    </p>
                    <div className="col-start-3 row-start-3 flex flex-col  p-2 dark:bg-white/10">
                        <Card>
                            <div className="space-y-10">
                                {data.map((item, index) => <div key={item.id} className="relative group transition-all duration-300 hover:translate-x-1">
                                    {index !== data.length - 1 && <div className="absolute left-3 top-8 h-full w-0.5 bg-gradient-to-b from-black via-gray-400 to-white opacity-60 group-hover:opacity-100 transition-opacity duration-300" />}
                                    <div className="flex gap-6">
                                        <div className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-sky-600 mt-1 shadow-md group-hover:scale-110 transition-transform duration-300">
                                            <div className="h-2.5 w-2.5 rounded-full bg-white shadow-sm" >
                                            </div>
                                        </div>

                                        <div className="flex-1 space-y-3 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                                            <div className="space-y-1">
                                                <h3 className="font-semibold text-lg text-gray-950 dark:text-white group-hover:text-sky-700 dark:group-hover:text-sky-300 transition-colors duration-300">
                                                    {item.title}
                                                </h3>

                                            </div>
                                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed group-hover:bg-gray-50 dark:group-hover:bg-gray-800/30 rounded-lg p-3 -m-3 transition-all duration-300">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>)}
                            </div>
                        </Card>
                    </div>

                    { }

                </div>
            </div>
        </div>
    );
};

export default FuturesSection;