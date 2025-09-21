import { ImageProvider } from '@/utils/ImageProvider';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const ForgetPassword = () => {

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data)
        reset();
    }

    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="w-full xmd:w-1/2 xmd:p-8 rounded-lg">
                {/* Logo */}
                <div className="flex justify-center items-center mb-4">
                    <Link to={"/"}>
                        <img src={ImageProvider.Navlogo} alt="Logo" className="h-20" />
                    </Link>
                </div>

                {/* Heading */}
                <h2 className="text-center text-xl xmd:text-3xl font-semibold text-gray-800  mb-6 font-merriweather">
                    Forget Password
                </h2>
                <p className="text-center text-sm text-gray-500 xmd:text-lg">
                    Enter the email for verification code.
                </p>

                {/* Form */}
                <form
                    className="space-y-4 xmd:w-8/12 mx-auto"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div>
                        <label className="text-sm xmd:text-lg text-black">Email</label>
                        <input
                            type="email"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^\S+@\S+\.\S+$/,
                                    message: "Invalid email address",
                                },
                            })}
                            placeholder="Enter your email"
                            className={`w-full px-4 py-2 border rounded-md  focus:outline-none focus:ring-2 ${errors.email
                                }`}
                        />
                        {errors.email && (
                            <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
                        )}
                    </div>





                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full bg-theme-primary text-white py-4 rounded-full border cursor-pointer transition transform hover:scale-105 duration-150 delay-100"
                    >
                        Continue
                    </button>
                </form>

            </div>
        </div>
    );
};

export default ForgetPassword;