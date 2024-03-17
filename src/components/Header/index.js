import React, { useState } from 'react'
import Searchbar from './Searchbar'
import CountrySelection from './CountrySelection'
import ProfilePhoto from './ProfilePhoto'
import { useMediaQuery } from 'react-responsive'
import Menu from './Menu'
import AdvanceSearch from './AdvanceSearch'
export default function Header() {
    const [showMenu, setshowMenu] = useState(false);
    const [showAdvSearch, setshowAdvSearch] = useState(false);
    const isTab = useMediaQuery({
        query: '(min-width: 768px)'
    });
    const menuItems = [
        {
            name: "All",
            url: "/",
        },
        {
            name: "Business",
            url: "/business",
        },
        {
            name: "Entertainment",
            url: "/entertainment",
        },
        {
            name: "Health",
            url: "/health",
        },
        {
            name: "Science",
            url: "/science",
        },
        {
            name: "Sports",
            url: "/sports",
        }, {
            name: "Technology",
            url: "/technology",
        },


    ];
    return (
        <header className='main_container bg-white px-3'>
            {showAdvSearch && <AdvanceSearch
                showAdvSearch={showAdvSearch}
            />}

            <div className="upperArea flex justify-between py-2 select-none items-center relative">
                <div className="logo font-bold font-logo text-xl">
                    Ovk's N<span className='bg-color2 py-1 pr-2 rounded-sm'>ews</span>
                </div>
                <Searchbar
                    setshowAdvSearch={setshowAdvSearch} setshowMenu={setshowMenu} />
                <div className="right_part flex gap-2">
                    <div className="country">
                        <CountrySelection />
                    </div>
                    <ProfilePhoto />
                </div>
            </div>
            <Menu
                menuItems={menuItems}
                isTab={isTab}
                showMenu={showMenu}
            />
        </header>
    )
}
