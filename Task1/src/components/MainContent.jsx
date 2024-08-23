import React from 'react';
import './styles/MainSection.css';
import '../App.css';
import { FaRegClock, FaCheckCircle } from 'react-icons/fa';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
];

const MainSection = () => {
    return (
        <div className="main-section">
            <div className="stats-cards">
                <div className="card">
                    <h3>Total Tasks</h3>
                    <p>120</p>
                </div>
                <div className="card">
                    <h3>Tasks Completed</h3>
                    <p>85</p>
                </div>
                <div className="card">
                    <h3>Pending Tasks</h3>
                    <p>35</p>
                </div>
            </div>

            <div className="recent-activity">
                <h3>Recent Activity</h3>
                <ul>
                    <li><FaRegClock /> Task "Design Dashboard" was created - 2 hours ago</li>
                    <li><FaCheckCircle /> Task "Fix Navbar Bug" was completed - 5 hours ago</li>
                    <li><FaRegClock /> Task "Update Profile UI" was created - 1 day ago</li>
                </ul>
            </div>

            <div className="tasks-overview">
                <h3>Tasks Overview</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default MainSection;
