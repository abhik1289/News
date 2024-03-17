import React from 'react'

export default function Button({outline, text,type, widthFull, rounded, styleConfig, onPress, disable }) {
    return (
        <button
        type={type}
            onClick={onPress}
            disabled={disable}
            // type="submit"
            className={`${!outline?"text-white font-font1 bg-color3 px-5 py-2 rounded-md mt-2":"border border-color3 font-font1 px-5 py-2 rounded-md mt-2"}`}
            style={styleConfig}
        >{text}
        </button>
    )
}