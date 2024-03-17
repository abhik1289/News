import React, { useState } from 'react'

export default function InputFiled({ readOnly, label, textValue, name ,placeholder}) {
    const [text, setText] = useState(textValue)
    return (
        <div className='input_wrapper my-2'>
            <label 
            className=' font-font1 block'
            htmlFor={label}>{label}</label>
            <input
            className='w-full border border-slate-400 rounded-md px-3 py-3'
                name={name}
                placeholder={placeholder}
                type="text"
                value={text}
                readOnly={readOnly}
                onChange={(e) => setText(e.target.value)}
            />
        </div>
    )
}
