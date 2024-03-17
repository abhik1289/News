import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import { GrFormClose } from 'react-icons/gr'
import { BiMenuAltRight } from 'react-icons/bi'
import { CiCircleMore } from 'react-icons/ci';
export default function Searchbar({ setshowMenu,setshowAdvSearch }) {

    const searcchButton = <div className="icon absolute top-[50%] translate-y-[-50%] right-3">
        <AiOutlineSearch />
    </div>
    const [showSearch, setshowSearch] = useState(false);
    const [text, setText] = useState("");
    return (
        <div className="searchBox ">
            <div className="big_screen_search lg:block hidden relative">
                {searcchButton}
                {
                    text.length > 0 && <div 
                    onClick={()=>setshowAdvSearch(true)}
                    className='advance_search absolute top-[50%] translate-y-[-50%] right-10 cursor-pointer'>
                        <CiCircleMore />
                    </div>
                }
                <input
                value={text}
                onChange={(e)=>setText(e.target.value)}
                    placeholder='Search News'
                    type="text"
                    className='w-[450px] border px-2 py-2 rounded-md placeholder:font-font2 focus:border-blue-600 outline-none'
                />
            </div>
            <div className="small_screen  block lg:hidden">
                {showSearch ? <div className="search_wrapper absolute bg-white h-full left-0 top-0 z-10 w-full">
                    <div className="searcch_area h-full relative py-2">
                        <div className="icon absolute top-[50%] cursor-pointer translate-y-[-50%] flex gap-2 right-3">
                            <GrFormClose onClick={() => setshowSearch(false)}
                            />
                            <AiOutlineSearch />
                        </div>
                        <input type="text" className='w-full px-2 rounded-md h-full border outline-none focus:border-blue-600' />
                    </div>
                </div> :
                    <div className='flex gap-2'>
                        <div className="icon w-[40px] h-[40px] bg-color2 rounded-full flex justify-center items-center cursor-pointer" onClick={() => setshowSearch(true)}>
                            <AiOutlineSearch />
                        </div>
                        <div className="icon w-[40px] h-[40px] bg-color2 rounded-full flex justify-center items-center cursor-pointer"
                            onClick={() => setshowMenu(prev => !prev)}>
                            <BiMenuAltRight />
                        </div>
                    </div>}
            </div>
        </div>
    )
}
