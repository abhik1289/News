import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { googleLogin } from '../../../../store/reducer/authReducer';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
export default function GoogleSuccess() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const checkAuthentication = async () => {
    console.log("Hello")
    const res = await fetch("/auth/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await res.json();
    console.log(res,data);


    if (res.status === 200) {
      // Cookies.set("googleAuth", JSON.stringify(data));
      // dispatch(googleLogin(data));
      // navigate("/");
    } else {
      // dispatch(googleLogin(""));
    }
  }
  useEffect(() => {
    checkAuthentication();
  }, [])
  return (
    <div>GoogleSuccess</div>
  )
}
