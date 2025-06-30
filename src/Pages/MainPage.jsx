import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';

const MainPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <footer>footer</footer>
        </div>
    );
};

export default MainPage;