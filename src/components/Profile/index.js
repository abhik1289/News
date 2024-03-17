import React, { useState } from 'react'
import InputFiled from './InputField'
import {BiSolidPencil} from 'react-icons/bi';
import EditBox from './EditBox';
export default function Profile() {
    const [showBox, setShowBox] = useState(false);
    return (
        <div className='w-[500px] min-[250px] bg-white rounded-md p-4'>
            <div className="title font-font1 text-2xl font-semibold">
                Your Profile Page
            </div>
            <div className="main_wrapper">
                <div className="profile_photo w-[100px] h-[100px] rounded-full overflow-hidden">
                    <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="profilee_img" />
                </div>
                <div className="profile_change_btn">
                    <button onClick={()=>setShowBox(!showBox)} className="bg-color3 font-font1 px-3 rounded-md text-white mt-2 py-2">
                        <BiSolidPencil/>
                    </button>
                </div>
                <div className="input_form_box mt-6">
                    <InputFiled
                        label="Full Name"
                        name="fullName"
                        textValue="Abhik Patra"
                        placeholder={"Your name"}
                    />
                    <InputFiled
                        label="Email"
                        name="email"
                        readOnly={true}
                        textValue="ab@gmail.com"
                    />
                    <InputFiled
                        label="Login with"
                        name="logn_with"
                        readOnly={true}
                        textValue="Google"
                    />
                     <button className="bg-color3 font-font1 px-3 rounded-md text-white mt-2 py-2">Modify</button>
                </div>
                {showBox && <EditBox/>}
            </div>
        </div>
    )
}
