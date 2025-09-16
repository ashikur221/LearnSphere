import { ImageProvider } from '@/utils/ImageProvider';
import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const QuestionSection = () => {



    return (
        <div className=' container mx-auto px-5 section-padding-y'>
            <div className="flex flex-col lg:flex-row items-center gap-4">
                <div className="lg:w-1/2">
                    <img src={ImageProvider.question} alt="" />
                </div>
                <div className="lg:w-1/2">
                    <p className="text-2xl font-semibold md:text-3xl xlg:text-5xl ">
                        Have questions about our RBT training?
                    </p>
                    <p className="text-small-text mt-2 md:mt-4 text-xs  md:text-sm">
                        Find quick answers to the most common questions about enrollment, course requirements, certification, and career support. Need more help? Our team is always here to support your journey.
                    </p>
                    <div className="FAQ">
                        <Accordion
                            type="single"
                            collapsible
                            className="w-full"
                            defaultValue="item-1"
                        >
                            <AccordionItem value="item-1">
                                <AccordionTrigger className={"text-base xlg:text-2xl"}>What services does norcal provide?</AccordionTrigger>
                                <AccordionContent className="flex flex-col gap-4 text-balance">
                                    <p>
                                        Our flagship product combines cutting-edge technology with sleek
                                        design. Built with premium materials, it offers unparalleled
                                        performance and reliability.
                                    </p>
                                    <p>
                                        Key features include advanced processing capabilities, and an
                                        intuitive user interface designed for both beginners and experts.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-2">
                                <AccordionTrigger className={"text-base xlg:text-2xl"}>What services does norcal provide?</AccordionTrigger>
                                <AccordionContent className="flex flex-col gap-4 text-balance">
                                    <p>
                                        Our flagship product combines cutting-edge technology with sleek
                                        design. Built with premium materials, it offers unparalleled
                                        performance and reliability.
                                    </p>
                                    <p>
                                        Key features include advanced processing capabilities, and an
                                        intuitive user interface designed for both beginners and experts.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-3">
                                <AccordionTrigger className={"text-base xlg:text-2xl"}>What services does norcal provide?</AccordionTrigger>
                                <AccordionContent className="flex flex-col gap-4 text-balance">
                                    <p>
                                        Our flagship product combines cutting-edge technology with sleek
                                        design. Built with premium materials, it offers unparalleled
                                        performance and reliability.
                                    </p>
                                    <p>
                                        Key features include advanced processing capabilities, and an
                                        intuitive user interface designed for both beginners and experts.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>

                        </Accordion>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default QuestionSection;