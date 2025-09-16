import Title from "@/common/Title";
import ModuleAccordion from "./ModuleAccordion";
import ProgressBar from "./ProgressBar";

const CourseModuleSidebar = ({ modules, activeLessonId, onSelectLesson }) => {
    return (
        <div className="space-y-4 border border-theme-primary rounded-2xl shadow-lg">
            <div className="bg-theme-primary rounded-t-2xl p-4 text-center text-white space-y-5 py-10">
                <p className="text-2xl xlg:text-4xl   font-semibold">
                    RBT Certification Course
                </p>
                <p className="">Complete 40-Hour Training Program</p>
                <div className="flex justify-center gap-5">
                    <button className='bg-white/10 text-white py-3 px-5 rounded-full'>6 Modules</button>
                    <button className='bg-white/10 text-white py-3 px-5 rounded-full'>75 Lessons</button>
                    <button className='bg-white/10 text-white py-3 px-5 rounded-full'>40 Hours</button>
                </div>
            </div>

            <div className="px-4 space-y-3">
                <div className="flex justify-between">
                    <p className="text-sm text-small-text">12 Module · 38.2 hours</p>
                    <p className="text-theme-primary text-sm">12% Complete</p>
                </div>
                <ProgressBar />
                {modules.map((module) => (
                    <div key={module.id} className="mb-4">
                        <ModuleAccordion
                            module={module}
                            activeLessonId={activeLessonId}
                            onSelectLesson={onSelectLesson}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CourseModuleSidebar;
