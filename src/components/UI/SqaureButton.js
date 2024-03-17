import React, { useState } from 'react'

export default function SqaureButton({ icon, tooltip, onTap }) {
    const [visible, setvisible] = useState(false);
    return (
        <div 
        onMouseOver={()=>setvisible(true)}
        onMouseOut={()=>setvisible(false)}

        className="main_wrapper relative cursor-pointer">
            {visible && <div className="tooltip bottom-[-25px] absolute bg-slate-800 rounded-md text-white p-1 text-[10px] max-w-[100px]">
                {tooltip}
            </div>}
            <div
                className='w-[35px] h-[35px] flex justify-center items-center bg-color3 rounded-md'
                onClick={onTap}>{icon}</div>
        </div>
    )
}
