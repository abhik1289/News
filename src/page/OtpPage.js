import React from 'react'
import { useLocation } from 'react-router-dom'
import OtpForm from '../components/Auth/OtpForm';

export default function OtpPage() {
    const location = useLocation()
    const id =location.state?._id;
  return (
   <section className='w-screen h-screen flex justify-center items-center'>
     <OtpForm id={id}/>
   </section>
  )
}
