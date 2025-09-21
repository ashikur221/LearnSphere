
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import OTPInput from "otp-input-react";
import { ImageProvider } from '@/utils/ImageProvider';

const VerifyOTP = () => {
    const [OTP, setOTP] = useState("");
    const handleVerify = () => {
        console.log("OTP Submitted:", OTP);
    };
    return (
        <div className="flex items-center justify-center  h-screen">
            <div className="bg-white p-8 rounded-2xl  md:w-[700px] lg:w-[470px] xlg:w-[600px] xl:w-[700px]  border-[#22404B]">
                <Link to="/" className="flex justify-center items-center mb-4">
                    <img src={ImageProvider.Navlogo} alt="Logo" className="h-20 mr-2" />
                </Link>

                {/* Heading */}
                <h2 className="text-center text-2xl font-bold text-gray-800 font-merriweather mb-2">
                    Verify OTP
                </h2>
                <p className="text-center text-lg text-gray-600 mb-1">
                    Enter the ETP code that we sent your email,
                    Be careful not to share code with anyone
                </p>

                <p className="text-center text-xs text-gray-400 mb-6">
                    We've sent a 6-digit verification code to your email. Check your spam
                    folder in case you didn't receive the code.
                </p>

                <div className="flex justify-center">
                    <OTPInput
                        value={OTP}
                        onChange={setOTP}
                        autoFocus
                        OTPLength={6}
                        otpType="number"
                        disabled={false}
                        secure
                        inputStyles={{
                            width: "4rem",
                            height: "4rem",
                            margin: "0 0.5rem",
                            fontSize: "1.5rem",
                            borderRadius: "0.5rem",
                            border: "2px solid #d1d5db",
                            textAlign: "center",
                            outline: "none",
                        }}
                        focusStyles={{
                            border: "2px solid #3b82f6",
                            boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.5)",
                        }}
                        className="otp-input-container text-center"
                    />
                </div>

                {/* Display the OTP value  */}
                <div className="text-center mt-4">

                </div>
                {/* Submit btn  */}
                <button
                    onClick={handleVerify}
                    className="w-full mt-6 py-3 bg-theme-primary cursor-pointer  hover:bg-opacity-90 text-white font-semibold rounded-full transition-all"
                >
                    Verify
                </button>

                {/* <div className="mt-4 text-center">
            <ResendOTP
              onResendClick={resendOtp}
              className="text-[#22404B] hover:underline cursor-pointer"
            />
          </div> */}
            </div>
        </div>
    );
};

export default VerifyOTP;