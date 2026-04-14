import React from 'react';
import Navbar from '../Components/shared/Navbar.jsx';
import { Outlet } from 'react-router';

function MainLayout() {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
}

export default MainLayout;