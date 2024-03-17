import React, { useState } from 'react'
import { BsFillGridFill, BsViewList } from 'react-icons/bs';
export default function NewsTitle({ setShowGrid, showGrid, categoryTitle }) {
    return (
        <div className="wrapper_bx flex justify-between select-none">
            <div className="list_title font-semibold font-font1 text-2xl py-2">
                {categoryTitle ? categoryTitle : "All News"}
            </div>
            <div className="contrller hidden lg:block">
                <div className="switch text-2xl cursor-pointer" onClick={() => setShowGrid(!showGrid)}>
                    {!showGrid ? <BsFillGridFill /> :
                        <BsViewList />}
                </div>
            </div>
        </div>
    )
}
