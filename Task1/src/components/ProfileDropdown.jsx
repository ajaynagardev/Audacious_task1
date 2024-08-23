import React, { useState } from 'react';
import { FaUser, FaCogs, FaSignOutAlt } from 'react-icons/fa';
import './styles/ProfileDropdown.css';
import profile from '../img/portrait-man-beautiful-background-generative-ai_166669-5660.avif'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
const ProfileDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="profile-dropdown" onClick={toggleDropdown}>
            <img src={profile} alt="Profile" className="profile-pic" />
            <span className='profile-downarrow'><MdOutlineKeyboardArrowDown /></span>
            {isOpen && (
                <div className="dropdown-content">
                    <div className="profile-info">
                        <img src={profile} alt="Profile" className="dropdown-profile-pic" />
                        <span className="profile-name">John Doe</span><br />
                        <div className="profile-role">UI/UX Designer</div>
                    </div>
                    <div className="dropdown-item"><FaUser className="dropdown-icon" /> Profile</div>
                    <div className="dropdown-item"><FaCogs className="dropdown-icon" /> Account Setting</div>
                    <div className="dropdown-item" id='profile-logout'><FaSignOutAlt className="dropdown-icon"  /> Logout</div>
                </div>
            )}
        </div>
    );
};

export default ProfileDropdown;
