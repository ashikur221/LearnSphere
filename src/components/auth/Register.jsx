import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Eye, EyeClosed } from 'lucide-react';



const Register = () => {
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

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>

                <div className="flex justify-between gap-5">
                    <div className="w-1/2">
                        <label htmlFor="" className='font-semibold'>First Name</label>
                        <div className="border">
                            <input {...register("firstName")} className='p-2 w-full border-none' type="text" placeholder='Enter your phone number' />
                        </div>
                    </div>

                    <div className="w-1/2">
                        <label htmlFor="" className='font-semibold'>Last Name</label>
                        <div className="border">
                            <input {...register("lastName")} className='p-2 w-full border-none' type="text" placeholder='Enter your phone number' />
                        </div>
                    </div>
                </div>

                <div className="">
                    <label htmlFor="" className='font-semibold'>Email Address</label>
                    <div className="border">
                        <input {...register("email")} className='p-2 w-full border-none' type="email" placeholder='Enter your email' />
                    </div>
                </div>

                <div className="">
                    <label htmlFor="" className='font-semibold'>Phone Number</label>
                    <div className="border">
                        <input {...register("phone")} className='p-2 w-full border-none' type="text" placeholder='Enter your phone number' />
                    </div>
                </div>

                <div className="">
                    <label htmlFor="" className='font-semibold'>Password</label>
                    <div className="border relative">
                        <input {...register("password")} type={showPassword ? 'text' : 'password'} className='p-2 w-full border-none' placeholder='Enter your password' />
                        {
                            showPassword ? (
                                <EyeClosed className='absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer' onClick={() => setShowPassword(!showPassword)} />
                            ) : (
                                <Eye className='absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer' onClick={() => setShowPassword(!showPassword)} />
                            )
                        }
                    </div>
                </div>

                <div className="">
                    <label htmlFor="" className='font-semibold'>Confirm Password</label>
                    <div className="border relative">
                        <input {...register("confirmPassword")} type={showConfirmPassword ? 'text' : 'password'} className='p-2 w-full border-none' placeholder='Enter your password' />
                        {
                            showConfirmPassword ? (
                                <EyeClosed className='absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer' onClick={() => setShowConfirmPassword(!showConfirmPassword)} />
                            ) : (
                                <Eye className='absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer' onClick={() => setShowConfirmPassword(!showConfirmPassword)} />
                            )
                        }
                    </div>
                </div>

                <button type='submit' className='bg-theme-primary text-white py-3 px-5 rounded w-full'>Register</button>

                <div className="flex justify-between">

                    <p className="text-theme-primary">Forgot Password?</p>
                </div>
            </form>
        </div>
    );
};

export default Register;