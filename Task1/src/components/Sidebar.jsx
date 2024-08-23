import React, { useState } from 'react';
import {
    FaTachometerAlt, FaComments, FaCalendarAlt, FaClipboardCheck,
    FaClock, FaFileAlt, FaWallet,FaSignOutAlt
} from 'react-icons/fa';
import { FiGrid,FiUsers,FiEdit,FiSettings,FiFileText } from "react-icons/fi";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { PiBuildingApartmentFill } from "react-icons/pi";
import { RiExchangeDollarLine,RiSecurePaymentLine } from "react-icons/ri"
import { GiReceiveMoney } from "react-icons/gi";
import { SlCalender } from "react-icons/sl";
import { TbReport } from "react-icons/tb";
import './styles/Sidebar.css';
import logo from '../img/1454065351890255872.jpeg'
import { FaSearch } from 'react-icons/fa';
const Sidebar = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isOptionsHovered, setIsOptionsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsExpanded(true);
    };

    const handleMouseLeave = () => {
        setIsExpanded(false);
        setIsOptionsHovered(false);
    };

    const handleOptionsMouseEnter = () => {
        setIsOptionsHovered(true);
    };

    const handleOptionsMouseLeave = () => {
        setIsOptionsHovered(false);
    };

    return (
        <div
            className={`sidebar ${isExpanded ? 'expanded' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="logo">
                <img src={logo} alt="Logo" width={55} />
            </div>
            <ul className="sidebar-menu">
                <li className="sidebar-item" onMouseEnter={handleOptionsMouseEnter} onMouseLeave={handleOptionsMouseLeave}>
   <FiGrid className="sidebar-icon"/>
                    {isOptionsHovered && (
                        <div>
                        <ul className="sub-menu">
                            <div className="search-bar">
                <FaSearch className="search-icon" />
                <input type="text" placeholder="Search" />
            </div>
            <div><p>My Options</p></div>
                            <li className="sub-item">
                                <FaTachometerAlt className="sub-icon" />
                                <span>Dashboard</span>
                            </li>
                            <li className="sub-item">
                                <FaComments className="sub-icon" />
                                <span>Feedbacks</span>
                            </li>
                            <li className="sub-item">
                                <FaCalendarAlt className="sub-icon" />
                                <span>Leaves</span>
                            </li>
                            <li className="sub-item">
                                <FaClipboardCheck className="sub-icon" />
                                <span>Attendance</span>
                            </li>
                            <li className="sub-item">
                                <FaClock className="sub-icon" />
                                <span>Daily Timesheet</span>
                            </li>
                            <li className="sub-item">
                                <FaFileAlt className="sub-icon" />
                                <span>Work Log</span>
                            </li>
                            <li className="sub-item">
                                <FaWallet className="sub-icon" />
                                <span>Reimbursements</span>
                            </li>
<hr />
                            <li className="sub-item" id='sub-item-second-section'>
                                <TbReport className="sub-icon" />
                                <span>Reports</span>
                            </li>

                            <li className="sub-item">
                                <RiSecurePaymentLine className="sub-icon" />
                                <span>My Expenses</span>
                            </li>

                            <li className="sub-item">
                                <GiReceiveMoney className="sub-icon" />
                                <span>Income</span>
                            </li>

                            <li className="sub-item">
                                <BiSolidCategoryAlt  className="sub-icon" />
                                <span>Categories</span>
                            </li>

                            <li className="sub-item">
                                <FiSettings className="sub-icon" />
                                <span>Settings</span>
                            </li>

                        </ul>
                        </div>
                        
                    )}
                </li>
                <li className="sidebar-item logout">
                    <FaSignOutAlt className="sidebar-icon" />
                  
                </li>
            </ul>
            

            <ul className="sidebar-menu1">
                <li className="sidebar-item" onMouseEnter={handleOptionsMouseEnter} onMouseLeave={handleOptionsMouseLeave}>
                    <PiBuildingApartmentFill className="sidebar-icon" />
                </li>              
            </ul>

            <ul className="sidebar-menu1">
                <li className="sidebar-item" onMouseEnter={handleOptionsMouseEnter} onMouseLeave={handleOptionsMouseLeave}>
                    <FiUsers className="sidebar-icon" />
                </li>              
            </ul>

            <ul className="sidebar-menu1">
                <li className="sidebar-item" onMouseEnter={handleOptionsMouseEnter} onMouseLeave={handleOptionsMouseLeave}>
                    <FiEdit className="sidebar-icon" />
                </li>              
            </ul>

            <ul className="sidebar-menu1">
                <li className="sidebar-item" onMouseEnter={handleOptionsMouseEnter} onMouseLeave={handleOptionsMouseLeave}>
                    <FiFileText className="sidebar-icon" />
                </li>              
            </ul>

            <ul className="sidebar-menu1">
                <li className="sidebar-item" onMouseEnter={handleOptionsMouseEnter} onMouseLeave={handleOptionsMouseLeave}>
                    <RiExchangeDollarLine className="sidebar-icon" />
                </li>              
            </ul>

            <ul className="sidebar-menu1">
                <li className="sidebar-item" onMouseEnter={handleOptionsMouseEnter} onMouseLeave={handleOptionsMouseLeave}>
                    <SlCalender className="sidebar-icon" />
                </li>              
            </ul>

            <ul className="sidebar-menu1">
                <li className="sidebar-item" onMouseEnter={handleOptionsMouseEnter} onMouseLeave={handleOptionsMouseLeave}>
                    <FiSettings className="sidebar-icon" />
                </li>              
            </ul>
        </div>
    );
};

export default Sidebar;
