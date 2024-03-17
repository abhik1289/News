import React, { useState } from 'react'
import AuthHeader from './AuthHeader'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Button from '../UI/Button';
import { useNavigate } from 'react-router-dom';
import { ValidateEmail } from '../../validation/validation';
let info = { email: "", otp: "" };
export default function Forgot() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("")
    const [EmailError, setEmailError] = useState("");
    const [optError, setOptError] = useState("")
    const [showOtpField, setShowOtpField] = useState(false);
    const verifyEmail = () => {
        if (email === null || email.length === 0) {
            setEmailError("Email is required");
        } else if (!ValidateEmail(email)) {
            setEmailError("Email is invalid");
        } else {
            setEmailError(null);
            setShowOtpField(true);
        }
        if (showOtpField) {
            if (otp === null || otp.length === 0) {
                setOptError("Otp is required");
            } else if (isNaN(otp)) {
                setOptError("Otp type is not valid");
            } else if (otp.length !== 6) {
                setOptError("Otp length must be 6");
            }
            else {
                setOptError(null);
            }
        }
    }
    return (
        <div className='w-[400px] min-h-[200px] p-4 bg-color2 rounded-lg transition duration-300'>
            <AuthHeader headline={"We'll Help You Reset Your Password"} subHeadline={"Find the page you were looking for in seconds."} />
            <div className="form_wrapper">
                <div className="form_box">
                    <label className=''>Email</label>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        name="email"
                        value={email}
                        className={`w-full py-2 outline-none border px-2 rounded-md font-main focus:border-blue-400 ${EmailError && 'border border-red-400'}`}
                        readOnly={showOtpField}
                    />
                    <div className="error_show text-red-400">
                        {EmailError && EmailError}
                    </div>
                </div>
                {showOtpField && <div className="form_box">
                    <label className=''>Otp</label>
                    <input
                        onChange={(e) => setOtp(e.target.value)}
                        type="text"
                        name="otp"
                        value={otp}
                        className={`w-full py-2 outline-none border px-2 rounded-md font-main focus:border-blue-400 ${optError && 'border border-red-400'}`}
                    />
                    <div className="error_show text-red-400">
                        {optError && optError}
                    </div>
                </div>}
              {showOtpField ?<Button onPress={()=>navigate("/passwordChange")} text={"Next"}/> :  <div className="button_wrapper gap-2 flex">
                    <Button onPress={verifyEmail} text={"Check"} />
                    <Button
                        outline
                        text={"Back"} />
                </div>}
            </div>

        </div>
    )
}
