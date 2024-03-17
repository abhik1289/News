import React from 'react'
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineInfoCircle, AiOutlineLogout } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';

export default function ProfilePhoto() {
    const navigate = useNavigate();
    return (
        <Menu menuButton={<div className="profile cursor-pointer w-[40px] h-[40px] bg-color2 rounded-full overflow-hidden relative">
            <img src="https://randomuser.me/api/portraits/men/26.jpg" alt="profilee_img" />
        </div>} transition>
            <Link to="/profile">
                <MenuItem className="gap-1 font-font2"><CgProfile />View Profile</MenuItem>
            </Link>
            <Link to={'/about_us'}>
                <MenuItem className="gap-1 font-font2"><AiOutlineInfoCircle />About us</MenuItem>
            </Link>
            <MenuItem className="gap-1 font-font2"><AiOutlineLogout />Log out</MenuItem>
        </Menu>
    )
}
