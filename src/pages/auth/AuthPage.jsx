import Login from '@/components/auth/Login';
import Register from '@/components/auth/Register';
import { ImageProvider } from '@/utils/ImageProvider';
import React, { useState } from 'react';

const AuthPage = () => {

    const tabContent = {

        login: {
            title: "Login",

        },
        signup: {
            title: "Create an Account",

        },
    };

    const [activeTab, setActiveTab] = useState("login");

    return (
        <div className=' flex flex-col lg:flex-row container mx-auto my-10 px-3 lg:px-0 '>
            <div className="bg-theme-primary/20 lg:rounded-l-xl text-white p-5  lg:w-1/2">
                <div className="w-10/12 mx-auto space-y-5">
                    <img src={ImageProvider.Navlogo} alt="" />
                    <p className="text-lg lg:text-3xl font-bold text-theme-primary">Start Learning with Future Behavior Analysis</p>
                    <p className="text-sm text-small-text mt-2">
                        Access your courses, track your progress,
                        and achieve your learning goals with our
                        comprehensive online platform.
                    </p>
                </div>

            </div>
            <div className=" border lg:rounded-r-xl lg:w-1/2">
                <ul className="flex items-center lg:gap-5 mt-4 border-b border-gray-200 dark:border-gray-700">
                    {Object.keys(tabContent).map((tabKey) => (
                        <li
                            key={tabKey}
                            className={`${activeTab === tabKey
                                ? "!border-theme-secondary !text-theme-primary"
                                : ""
                                } px-4 lg:px-6 py-2 text-lg font-medium border-b-2 dark:text-[#abc2d3] text-[#424242] transition duration-300 border-transparent cursor-pointer`}
                            onClick={() => setActiveTab(tabKey)}
                        >
                            {tabContent[tabKey].title}
                        </li>
                    ))}
                </ul>

                {/* Tab Content */}
                <div className="p-3 lg:p-4 bg-white dark:bg-gray-800  ">
                    {
                        tabContent[activeTab].title === "Login" ?
                            <Login />
                            :
                            <Register />
                    }
                </div>
            </div>
        </div>
    );
};

export default AuthPage;