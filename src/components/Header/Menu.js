import React from 'react'
import { useLocation, Link } from 'react-router-dom'
export default function Menu({ showMenu, isTab, menuItems }) {
    const location = useLocation();
    const path = location.pathname;
    return (
        <div className="container flex items-center gap-5 md:justify-center justify-start ">
            <div className="left_part">
                <ul className={`flex gap-2 font-font1 flex-col transition-all duration-700  md:flex-row ${!isTab && (showMenu ? "h-[350px] " : "h-0 ")}`}>
                    {menuItems.map((item, index) => {
                        return <Link key={index} to={item.url}>
                            <li
                                className={`px-3 py-2 border-b-2 border-b-white  cursor-pointer transition-all  duration-700 hover:border-b-color2 hover:text-color2 ${path === item.url && "text-color2 border-b-color2"}`}
                                key={index}>{item.name}</li>
                        </Link>
                    })}
                 

                </ul>
            </div>
        </div>
    )
}
