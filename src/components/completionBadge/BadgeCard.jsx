import { useState, useEffect } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { ImageProvider } from "@/utils/ImageProvider";
import { ArrowRight } from "lucide-react";
import { Progress } from "../ui/progress";

const BadgeCard = ({ showModal }) => {
    const [isOpen, setIsOpen] = useState(false);

    // Open modal if showModal condition is true
    useEffect(() => {
        if (showModal) {
            setIsOpen(true);
        }
    }, [showModal]);

    return (
        <div>
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent>
                    <div className="border rounded-xl shadow-md">
                        <div className="bg-theme-primary rounded-t-xl flex flex-col text-center items-center p-5">
                            <div className="">
                                <p className="text-sm lg:text-2xl text-white font-bold">Congratulations!</p>
                                <p className="text-sm lg:text-base text-white/70">You've earned your first badge</p>
                            </div>
                        </div>

                        <div className="flex p-5">
                            <div className="w-full space-y-5 p-4">
                                <div className="">
                                    <div className="flex flex-col items-center gap-4">
                                        <img src={ImageProvider.bronze} alt="" className="w-20" />
                                    </div>
                                    <div className="flex flex-col items-center gap-2 mt-4">
                                        <p className="text-sm lg:text-2xl text-theme-primary font-bold">
                                            Bronze Achiever
                                        </p>
                                        <p className="text-sm lg:text-base text-small-text">
                                            Your first milestone badge
                                        </p>
                                    </div>

                                    <div className="bg-theme-primary/10 border-2 rounded-2xl flex flex-col justify-between p-5 items-center my-4">
                                        <p className="text-sm  text-small-text">
                                            You've earned
                                        </p>
                                        <p className="text-sm lg:text-2xl text-theme-primary font-bold">
                                            40
                                        </p>
                                        <p className="text-sm  text-small-text">
                                            Reward Points
                                        </p>
                                    </div>
                                    <p className="text-sm text-center  text-big-text">
                                        Great job on completing your first module! You're on your way to becoming an RBT expert. Keep up the excellent work and continue your learning journey.
                                    </p>

                                    <div className="my-5">
                                        <div className="flex justify-between">
                                            <p className="text-xs  text-small-text">
                                                Next badge at 100 points
                                            </p>
                                            <p className="text-xs my-1  text-small-text">
                                                40/100
                                            </p>
                                        </div>
                                        <Progress value={40} className="h-2 rounded-full" />
                                    </div>

                                </div>


                            </div>

                        </div>

                        <div className="flex flex-col justify-between items-center p-5 border-t ">

                            <div className="">
                                <button className='bg-theme-primary text-white py-3 px-5 rounded-full flex items-center gap-1'><ArrowRight /> Continue Learning</button>
                            </div>
                        </div>

                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default BadgeCard;
