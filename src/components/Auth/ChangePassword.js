import React, { useState } from 'react'
import AuthHeader from './AuthHeader'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import Button from '../UI/Button';

let info = {
  password: "",
  confirmPassword: "",
}
export default function ChangePassword() {
  const [data, setdata] = useState(info);
  const [visible, setVisible] = useState(false);

  const { password, confirmPassword } = data;
  const handleChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value })
  };
  const validation = Yup.object({
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string().required("Confirm Password is required").oneOf([Yup.ref('password'), null], 'Passwords do not match')
  })
  return (
    <div className='w-[400px] min-h-[200px] bg-color2 rounded-md p-4'>
      <AuthHeader headline={"Chnage Your Password now !"}
        subHeadline={""}
      />
      <Formik
        enableReinitialize
        initialValues={{ password, confirmPassword }}
        validationSchema={validation}
      >
        {({ errors, touched }) => <Form>
        <div className="form_box">
                <label htmlFor="username" className='block font-font1'>Password</label>
                <div className="password_wrapper relative">
                  <div className="password_controller absolute top-[50%] translate-y-[-50%] right-3 cursor-pointer" onClick={() => setVisible(!visible)}>
                    {
                      visible ? <MdVisibility /> : <MdVisibilityOff />
                    }
                  </div>
                  <Field
                    onChange={handleChange}
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
                <label htmlFor="username" className='block font-font1'>Email or Mobile</label>
                <Field
                  onChange={handleChange}
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
              <Button text={"Change Password"}/>
        </Form>}
      </Formik>
    </div>
  )
}
