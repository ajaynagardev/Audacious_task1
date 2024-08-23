import React from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import './App.css';
import MainContent from './components/MainContent';

const App = () => {
    return (
        <div className="app-container">
            <Sidebar />
            <div className="main-content">
                <Navbar />
                <MainContent/>    
            </div>
        </div>
    );
};

export default App;
