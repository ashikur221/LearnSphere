import { Eye, EyeClosed } from 'lucide-react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
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

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
                <div className="">
                    <label htmlFor="" className='font-semibold'>Provide Your Email</label>
                    <div className="border">
                        <input {...register("email")} className='p-2 w-full border-none' type="text" placeholder='Enter your email' />
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

                <button type='submit' className='bg-theme-primary text-white py-3 px-5 rounded w-full'>Login</button>

                <div className="flex justify-between">
                    <Link to={"/forget-password"}>
                        <p className="text-theme-primary">Forgot Password?</p>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default Login;