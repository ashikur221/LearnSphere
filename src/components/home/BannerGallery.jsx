import { CustomTikMark } from '@/utils/IconProvider';
import { ImageProvider } from '@/utils/ImageProvider';
import React from 'react';
import { GiCheckMark } from 'react-icons/gi';

const BannerGallery = () => {
    const GalleryImages = [
        ImageProvider.bannerImg1,
        ImageProvider.bannerImg2,
        ImageProvider.bannerImg3,
        ImageProvider.bannerImg4,
    ];

    // background colors for each image container
    const bgColors = ["bg-sky-200", "bg-gray-100", "bg-gray-700", "bg-sky-200"];

    // floating dots with position + color
    const dots = [
        { color: "bg-red-500", position: "top-10 left-2" },
        { color: "bg-purple-500", position: "top-20 right-2" },
    ];

    return (
        <div className="">

            <div className="relative hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 place-items-center py-10 container mx-auto">
                {/* Floating dots (hidden on mobile) */}
                {dots.map((dot, i) => (
                    <span
                        key={i}
                        className={`hidden sm:block absolute w-3 h-3 rounded-full ${dot.color} ${dot.position}`}
                    ></span>
                ))}

                {GalleryImages.map((image, index) => (
                    <div
                        key={index}
                        className={`flex items-center justify-center rounded-[40%] overflow-hidden relative ${bgColors[index]}
          ${index === 0 || index === GalleryImages.length - 1 ? "-mt-52" : ""}`}
                    >
                        <img
                            src={image}
                            alt=""
                            className="object-cover"
                        />
                    </div>
                ))}


            </div>
            <div className=" mx-auto w-1/2 flex flex-wrap justify-center gap-5">
                <button className="bg-white shadow-md py-3 px-5 rounded-full text-small-text flex justify-center items-center gap-3"><CustomTikMark/> BACB Aligned</button>
                <button className="bg-white shadow-md py-3 px-5 rounded-full text-small-text flex justify-center items-center gap-3"><CustomTikMark/> 100% Online</button>
                <button className="bg-white shadow-md py-3 px-5 rounded-full text-small-text flex justify-center items-center gap-3"><CustomTikMark/> Certificate Included</button>
            </div>
        </div>

    );
};

export default BannerGallery;
