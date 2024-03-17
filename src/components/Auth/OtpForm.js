import React, { useState } from 'react'
import Button from '../UI/Button'
import { useParams, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { auth } from '../../store/reducer/authReducer';

export default function OtpForm({ id }) {
    const { email } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [otp, setOtp] = useState("");
    const [error, setError] = useState("");
    const handleInputchange = (e) => {
        const { value } = e.target
        if (isNaN(value)) {
            setError("Only Number values are allowed");
        } else {
            setError(null)
        }
        setOtp(value)
    }
    const handleOtpButton = async () => {
        try {
            if (otp?.length === 6) {
                setError(null);
                const res = await fetch("/auth/user/api/activeAccount", {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify({ email, otp })
                });
                const data = await res.json();
                if (res.status === 200) {
                    Cookies.set("auth", JSON.stringify(data.message));
                    dispatch(auth(data.message));
                    setTimeout(() => {
                        navigate("/");
                    }, 2000);
                }
            } else {
                setError("Only 6 numbers are allowed");
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='bg-color2 rounded-md w-[400px] h-[250px] p-4'>
            <div className="otp_form">
                <div className="title font-font1 text-2xl font-semibold mb-3">
                    Verified your account
                </div>

                <label className='block font-font1' htmlFor="otp">Your Otp</label>
                <input
                    min={6}
                    max={6}
                    value={otp}
                    onChange={handleInputchange}
                    type="text"
                    className='w-full py-2 outline-none border px-2 rounded-md font-main focus:border-blue-400' />
                {error && <div className='error_text'>{error}</div>}
                <Button type={'submit'}
                    onPress={handleOtpButton}
                    text="Verify" />

            </div>
        </div>
    )
}
