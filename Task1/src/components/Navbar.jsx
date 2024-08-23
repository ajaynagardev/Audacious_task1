import React from 'react';
import ProfileDropdown from './ProfileDropdown';
import { RiRecordCircleLine } from "react-icons/ri";
import { RxDividerVertical } from "react-icons/rx";
import './styles/Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="profile-section">
                <span className="timer">00:03:20 <span className='recording'><RiRecordCircleLine /></span></span>
                <span className='slesh-icon'><RxDividerVertical /></span>
                <ProfileDropdown />
            </div>
        </div>
    );
};

export default Navbar;

