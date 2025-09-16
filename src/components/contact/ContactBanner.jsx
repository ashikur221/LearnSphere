import { ImageProvider } from '@/utils/ImageProvider';
import React from 'react';

const ContactBanner = () => {
    return (
        <div>
            <div className="relative w-full overflow-hidden ">
                {/* Background Image */}
                <div className="w-full h-full">
                    <img
                        src={ImageProvider.contactBanner}
                        alt="Newsletter background"
                        className="w-full h-full  object-cover min-h-[300px] md:min-h-[400px]"
                    />
                </div>

                {/* Content Overlay */}
                <div className="absolute border inset-0 flex flex-col lg:flex-row items-center justify-center  gap-6 md:gap-8 p-4 md:p-8">
                    <div className="w-full max-w-4xl text-center  space-y-5">
                        <p className="text-2xl text-white font-bold md:text-4xl lg:text-5xl">
                            Contact us
                        </p>
                        <p className="text-sm mt-2 md:mt-4 md:text-base lg:text-xl text-white/60">
                            We’re here to help! Whether you have questions, need support, or want to share feedback, reach out to us and we’ll respond promptly.
                        </p>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default ContactBanner;