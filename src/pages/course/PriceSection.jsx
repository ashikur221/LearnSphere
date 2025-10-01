import { CustomBookMark, CustomCertificate, CustomClock, CustomDownload2 } from '@/utils/IconProvider';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Clock } from 'lucide-react';
import React, { useEffect, useRef } from 'react';

const PriceSection = () => {

    const PriceData = [
        {
            title: "One-time payment",
            price: "100",
            oldPrice: "400",
            offer: "75% off in first month",
            keypoints: [
                {
                    icon: <CustomClock />,
                    text: "40 hours of content"
                },
                {
                    icon: <CustomBookMark />,
                    text: "75 lessons"
                },
                {
                    icon: <CustomDownload2 />,
                    text: "Downloadable resources"
                },
                {
                    icon: <CustomCertificate />,
                    text: "Certificate of completion"
                },
                {
                    icon: <CustomDownload2 />,
                    text: "Lifetime access"
                }
            ]
        },
        {
            title: "One-time payment",
            price: "100",
            oldPrice: "400",
            offer: "75% off in first month",
            keypoints: [
                {
                    icon: <CustomClock />,
                    text: "40 hours of content"
                },
                {
                    icon: <CustomBookMark />,
                    text: "75 lessons"
                },
                {
                    icon: <CustomDownload2 />,
                    text: "Downloadable resources"
                },
                {
                    icon: <CustomCertificate />,
                    text: "Certificate of completion"
                },
                {
                    icon: <CustomDownload2 />,
                    text: "Lifetime access"
                }
            ]
        },
        {
            title: "One-time payment",
            price: "100",
            oldPrice: "400",
            offer: "75% off in first month",
            keypoints: [
                {
                    icon: <CustomClock />,
                    text: "40 hours of content"
                },
                {
                    icon: <CustomBookMark />,
                    text: "75 lessons"
                },
                {
                    icon: <CustomDownload2 />,
                    text: "Downloadable resources"
                },
                {
                    icon: <CustomCertificate />,
                    text: "Certificate of completion"
                },
                {
                    icon: <CustomDownload2 />,
                    text: "Lifetime access"
                }
            ]
        }
    ]

    const sectionRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(
            sectionRef.current,
            {
                opacity: 0,
                scale: 0.7
            },
            {
                opacity: 1,
                scale: 1,
                duration: 0.8,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 50%',
                    toggleActions: 'play none none none',
                    markers: false
                }
            }
        )
    }, [])

    return (
        <div ref={sectionRef} className='grid grid-cols-1 lg:grid-cols-2 xlg:grid-cols-3  gap-4'>
            {
                PriceData?.map((item, index) => (
                    <div className="border border-theme-primary/30 p-5 rounded-xl shadow-sm space-y-5">
                        <p className="text-theme-primary">{item?.title}</p>
                        <div className="space-y-2">
                            <p className=" space-x-4">
                                <span className="text-4xl font-bold text-big-text">{item?.price}$</span>
                                <span className=" text-small-text font-semibold line-through">{item?.oldPrice}$</span>
                            </p>
                            <p className='bg-[#0A9FE0]/10 text-[#0A9FE0] p-2 rounded-full text-center text-sm'>{item?.offer}</p>
                        </div>
                        <button className='bg-theme-primary w-full text-center text-white py-3 px-5 rounded  my-5 gap-1'>
                            Enroll Now
                        </button>

                        <div className="space-y-2">
                            {
                                item?.keypoints?.map((item, index) => (
                                    <div className="flex items-center gap-2 text-small-text" key={index}>
                                        {item?.icon}
                                        <p className="text-sm ">{item?.text}</p>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                ))
            }

        </div>
    );
};

export default PriceSection;