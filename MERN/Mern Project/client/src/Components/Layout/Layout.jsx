// Layout.jsx
import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import Sidebar from '../common/Sidebar';
import { AiOutlineMenu } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { openSidebar } from '../../redux/slices/uiSlice';
import Modal from '../common/Modal';

const Layout = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <Sidebar />
            <Modal />
            <button onClick={() => dispatch(openSidebar())} className='iconButton'>
                <AiOutlineMenu className='h-5 w-5' />
            </button>
            <Toaster position='top-right' />
            <Outlet />
        </div>
    );
}

export default Layout;
