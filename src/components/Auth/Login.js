import React, { useState } from 'react'
import Button from '../UI/Button'
// import TextInput from '../UI/Input'
import { Field, Form, Formik } from 'formik';
import * as Yup from "yup";
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import {BsGoogle,BsFacebook} from 'react-icons/bs'
import SqaureButton from '../UI/SqaureButton';
import { AiOutlineUserAdd } from 'react-icons/ai'
import AuthHeader from './AuthHeader';
import {useNavigate} from 'react-router-dom'
const loginInfos = {
  email: "",
  password: "",
};
export default function Login() {
  const [visible, setVisible] = useState(false);
  const [login, setLogin] = useState(loginInfos);
  const navigate = useNavigate();
  const { email, password } = login;
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };
  const loginSubmit = (values, actions) => {
    console.log(values)
  }
  const loginValidation = Yup.object({
    email: Yup.string()
      .required("Email address is required.")
      .email("Must be a valid email.")
      .max(100),
    password: Yup.string().required("Password is required"),
  });
  const googleLogin=()=>{
    window.open("http://localhost:5000/auth/google","_self");
  }
  return (
    <section className='login_wrapper w-screen h-screen flex justify-center items-center bg-color1'>
      <div className='wrapper bg-color2 w-[400px] min-h-[00px] rounded-md p-4'>
        <AuthHeader/>
        <div className="form_box mt-2">
          <Formik
            enableReinitialize
            initialValues={{
              email,
              password,
            }}
            validationSchema={loginValidation}
            onSubmit={loginSubmit}
          >
            {({ errors, touched }) => <Form>
              <div className="form_box">
                <label htmlFor="username" className='block font-font1'>Username</label>
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
                <label htmlFor="username" className='block font-font1'>Password</label>
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
                    className={`w-full py-2 outline-none border px-2 rounded-md font-main focus:border-blue-400 ${errors.email && touched.email && "border-red-400"}`}
                  />
                </div>
                <div onClick={()=>navigate("/forgot")} className="forgotpWD text-blue-400 text-right cursor-pointer">
                  Forgot Password
                </div>
                <div className="error_message font-font2 text-red-500">
                  {errors.password && touched.password && <div>
                    {errors.password}
                  </div>}
                </div>
              </div>
              <Button text={"Log in"} />
            </Form>}
          </Formik>
        </div>
        <div className="bottom_box mt-3 flex gap-3">
          <SqaureButton
            icon={<AiOutlineUserAdd />}
            tooltip={"SignUp"}
            onTap={()=>navigate("/signup")}
          />
          <SqaureButton
            icon={<BsGoogle />}
            tooltip={"Google"}
            onTap={googleLogin}
            
          />
          <SqaureButton
            icon={<BsFacebook />}
            tooltip={"Facebook"}
            onTap={null}
          />
        </div>
      </div>
    </section>
  )
}
