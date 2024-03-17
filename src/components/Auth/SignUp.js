import React, { useState } from 'react'
import Button from '../UI/Button'
// import TextInput from '../UI/Input'
import { Field, Form, Formik } from 'formik';
import * as Yup from "yup";
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import AuthHeader from './AuthHeader';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast'
import 'react-toastify/dist/ReactToastify.css';
const loginInfos = {
  email: "",
  password: "",
  confirmPassword: "",
  fullName: ""
};
export default function SignUp() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [auth, setAuth] = useState(loginInfos);
  const { email, password, confirmPassword, fullName } = auth;
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setAuth({ ...auth, [name]: value });
  };
  const loginSubmit = async (values, actions) => {
    const { email, password, fullName } = values;
    const res = await fetch("/auth/user/api/signUp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password,
        fullName
      })
    });
    const data = await res.json();
    const info = data.message;
    console.log(info)
    const mail = info.email;
    if (res.status === 200) {
      toast.success("Successfully");
      setInterval(() => {
        navigate(`/otpPage/${mail}`);
      }, 2000);
    } else {
      toast.error(info);
    }
  }
  const signupValidation = Yup.object({
    fullName: Yup.string().min(3).max(20).required(),
    email: Yup.string()
      .required("Email address is required.")
      .email("Must be a valid email.")
      .max(100),
    password: Yup.string().min(6).max(16).required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match').required("Confirm Password is required")
  })
  return (
    <section className='login_wrapper w-screen h-screen flex justify-center items-center bg-color1'>
      <div className='wrapper bg-color2 w-[400px] min-h-[00px] rounded-md p-4'>
        <AuthHeader />
        <div className="form_box mt-2">
          <Formik
            enableReinitialize
            initialValues={{
              email,
              password,
              confirmPassword, fullName
            }}
            validationSchema={signupValidation}
            onSubmit={loginSubmit}
          >
            {({ errors, touched }) => <Form>
              <div className="form_box">
                <label htmlFor="fullname" className='block font-font1'>Fullname</label>
                <Field
                  onChange={handleLoginChange}
                  type="text"
                  name="fullName"
                  className={`w-full py-2 outline-none border px-2 rounded-md font-main focus:border-blue-400 ${errors.fullName && touched.fullName && "border-red-400"}`}
                />
                <div className="error_message font-font2 text-red-500">
                  {errors.fullName && touched.fullName && <div>
                    {errors.fullName}
                  </div>}
                </div>
              </div>
              <div className="form_box">
                <label htmlFor="email" className='block font-font1'>Email</label>
                <Field
                  onChange={handleLoginChange}
                  type="text"
                  name="email"
                  className={`w-full py-2 outline-none border px-2 rounded-md font-main focus:border-blue-400 ${errors.email && touched.email && "border-red-400"}`}
                />
                <div className="error_message font-font2 text-red-500">
                  {errors.email && touched.email && <div>
                    {errors.email}
                  </div>}
                </div>
              </div>
              <div className="form_box">
                <label htmlFor="password" className='block font-font1'>Password</label>
                <div className="password_wrapper relative">
                  <div className="password_controller absolute top-[50%] translate-y-[-50%] right-3 cursor-pointer" onClick={() => setVisible(!visible)}>
                    {
                      visible ? <MdVisibility /> : <MdVisibilityOff />
                    }
                  </div>
                  <Field
                    onChange={handleLoginChange}
                    type={!visible ? "text" : "password"}
                    name="password"
                    className={`w-full py-2 outline-none border px-2 rounded-md font-main focus:border-blue-400 ${errors.password && touched.password && "border-red-400"}`}
                  />
                </div>
                <div className="error_message font-font2 text-red-500">
                  {errors.password && touched.password && <div>
                    {errors.password}
                  </div>}
                </div>
              </div>
              <div className="form_box">
                <label htmlFor="cpassword" className='block font-font1'>Confirm Password</label>
                <Field
                  onChange={handleLoginChange}
                  type="password"
                  name="confirmPassword"
                  className={`w-full py-2 outline-none border px-2 rounded-md font-main focus:border-blue-400 ${errors.confirmPassword && touched.confirmPassword && "border-red-400"}`}
                />
                <div className="error_message font-font2 text-red-500">
                  {errors.confirmPassword && touched.confirmPassword && <div>
                    {errors.confirmPassword}
                  </div>}
                </div>
              </div>
              <div className="button_wrapper flex gap-2">
                <Button type="submit" text={"Sign Up"} />
                <Button type="button" onPress={() => navigate("/login")} outline text={"Back"} />

              </div>
            </Form>}
          </Formik>
          <Toaster
            position="top-center"
            reverseOrder={true}
          />
        </div>
      </div>
    </section>
  )
}
