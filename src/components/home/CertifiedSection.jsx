import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Lock, Users } from "lucide-react";
import { ImageProvider } from "@/utils/ImageProvider";
import { BadgeCustomIcon } from "@/utils/IconProvider";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const courses = [
    {
        id: 1,
        title: "Module 1: Skill Acquisition",
        status: "Completed",
        description: "Learn the fundamentals of Applied Behavior Analysis.",
        students: "3.2k",
        progress: 32,
        image: ImageProvider.module1,
    },
    {
        id: 2,
        title: "Module 2: Behavior Concepts",
        status: "In Progress",
        description: "Learn the fundamentals of Applied Behavior Analysis.",
        students: "3.2k",
        progress: 32,
        image: ImageProvider.module2,
    },
    {
        id: 3,
        title: "Module 3: Assessment",
        status: "Locked",
        description: "Learn the fundamentals of Applied Behavior Analysis.",
        students: "3.2k",
        progress: 32,
        image: ImageProvider.module3,
        locked: true,
    },
];

const CertifiedSection = () => {
    const cardsRef = useRef([]);
    const sectionRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Use gsap.context for better cleanup
        const ctx = gsap.context(() => {
            gsap.fromTo(cardsRef.current,
                {
                    y: 250,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out",
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 30%",
                       
                        toggleActions: "play none none none",
                    }
                }
            );
        }, sectionRef);

        // Cleanup function
        return () => ctx.revert();
    }, []);

    // Clear and reset the refs array
    useEffect(() => {
        cardsRef.current = cardsRef.current.slice(0, courses.length);
    }, []);

    return (
        <section ref={sectionRef} className="container mx-auto py-12">
            {/* Top Heading */}
            <div className="mb-10">
                <div className="flex items-center justify-center lg:justify-start gap-4">
                    <div className="w-10 h-10 bg-theme-primary flex items-center justify-center p-2 rounded-full">
                        <BadgeCustomIcon />
                    </div>
                    <p className="xlg:text-lg text-big-text font-semibold">
                        Guaranteed and certified
                    </p>
                </div>
                <h2 className="text-2xl xlg:text-5xl font-bold">
                    From Beginner to{" "}
                    <span className="text-yellow-500">Certified RBT</span>
                </h2>
            </div>

            {/* Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {courses.map((course, i) => (
                    <Card
                        key={course.id}
                        ref={(el) => {
                            cardsRef.current[i] = el;
                        }}
                        className="overflow-hidden !pt-0 shadow-md hover:shadow-lg transition"
                    >
                        <div className="relative">
                            <img
                                src={course.image}
                                alt={course.title}
                                className="w-full h-52 xlg:h-96 object-cover"
                            />
                            {course.locked && (
                                <div className="absolute inset-0 flex items-center justify-center bg-white/40">
                                    <Lock className="text-white w-10 h-10" />
                                </div>
                            )}
                        </div>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-base lg:text-lg font-semibold">
                                {course.title}
                            </CardTitle>
                            <Badge
                                variant={
                                    course.status === "Completed"
                                        ? "default"
                                        : course.status === "In Progress"
                                            ? "secondary"
                                            : "outline"
                                }
                                className="w-fit mt-1"
                            >
                                {course.status}
                            </Badge>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <p className="text-sm text-muted-foreground">
                                {course.description}
                            </p>
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                <Users className="w-4 h-4" />
                                {course.students} Students
                            </div>
                            <div>
                                <Progress value={course.progress} className="h-2" />
                                <span className="text-xs text-muted-foreground">
                                    Course Progress {course.progress}%
                                </span>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
};

export default CertifiedSection;