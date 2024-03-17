import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { auth } from '../../store/reducer/authReducer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';
// /auth/user/api/
export default function Verify() {
    const { token } = useParams();
    const dispatch = useDispatch();
    const ActiveAccount = async () => {
        const res = await fetch("/auth/user/api/activeAccount", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                token: token
            })
        });
        const data = await res.json();
        if (res.status === 200) {
            toast.success("Successfully verified");
            Cookies.set('auth', JSON.stringify(data));
            setTimeout(() => {
                dispatch(auth(data));
            }, 2000)
        } else {
            toast.error("Error occurred");
        }
    };

    useEffect(() => {
        ActiveAccount();
    }, [token])
    return (
        <div>
            <ToastContainer />
        </div>
    )
}
