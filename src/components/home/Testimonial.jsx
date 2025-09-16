import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useRef, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ImageProvider } from '@/utils/ImageProvider';

const Testimonials = [
    {
        id: 1,
        image: ImageProvider.test1,
        name: "Jenny Wilson",
        designation: "RBT Student",
        description: `Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst. Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis. Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst.`
    },
    {
        id: 2,
        image: ImageProvider.test2,
        name: "Jenny Wilson",
        designation: "RBT Student",
        description: `Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst. Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis. Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst.`
    },
    {
        id: 1,
        image: ImageProvider.test1,
        name: "Jenny Wilson",
        designation: "RBT Student",
        description: `Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst. Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis. Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst.`
    },
    {
        id: 2,
        image: ImageProvider.test2,
        name: "Jenny Wilson",
        designation: "RBT Student",
        description: `Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst. Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis. Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst.`
    }
]

const ServiceCard = ({ testimonial }) => {

    return (
        <div className="bg-white rounded-xl p-4 md:p-6 border h-full space-y-10">
            <div className="flex justify-end">
                <img src={ImageProvider.quote} className='w-8 lg:w-12' alt="" />
            </div>
            <div className="flex items-center gap-4">
                <Avatar className={"w-16 h-16"}>
                    <AvatarImage src={testimonial?.image} />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                    <p className="text-lg font-semibold">{testimonial?.name}</p>
                    <p className="text-sm text-small-text">{testimonial?.designation}</p>
                </div>

            </div>
            <p className="text-sm text-small-text">
                {testimonial?.description}
            </p>
        </div>
    );
};

const Testimonial = () => {
    const swiperRef = useRef(null);
    return (
        <section id='service' className="container mx-auto">
            <p className="text-2xl xlg:text-5xl font-semibold my-10">
                Student's {" "}
                <span className="text-theme-primary relative inline-block">
                    Feedback
                    <svg
                        className="absolute  left-0 w-full"
                        viewBox="0 0 100 10"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M0,5 Q40,1 100,5"
                            stroke="#fbbf24"
                            strokeWidth="2"
                            fill="transparent"
                        />
                    </svg>
                </span>
            </p>
            <div

                className="">


                <Swiper
                    modules={[Navigation]}
                    spaceBetween={20}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1200: { slidesPerView: 2 },
                    }}
                >
                    {Testimonials.map((test, idx) => (
                        <SwiperSlide key={idx}>
                            <ServiceCard testimonial={test} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            {/* Custom navigation buttons */}
            <div className="flex justify-end mt-4 gap-2">
                <button
                    onClick={() => swiperRef.current?.slidePrev()}
                    className="p-2 rounded-full bg-white border hover:bg-gray-300 transition-colors"
                    aria-label="Previous slide"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                </button>
                <button
                    onClick={() => swiperRef.current?.slideNext()}
                    className="p-2 rounded-full bg-[#00BFFF] border hover:bg-gray-300 transition-colors"
                    aria-label="Next slide"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 18l6-6-6-6" />
                    </svg>
                </button>
            </div>
        </section>
    );
};

export default Testimonial;