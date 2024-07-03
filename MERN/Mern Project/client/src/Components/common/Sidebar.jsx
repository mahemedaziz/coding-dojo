import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeSidebar, selectSidebar } from '../../redux/slices/uiSlice';
import { AiOutlineClose } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { selectUser, clearUser, selectIsLoggedIn, setUser } from '../../redux/slices/userSlice';
import axios from 'axios';

const Sidebar = () => {
    const sidebar = useSelector(selectSidebar);
    const user = useSelector(selectUser);
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const getUserProfile = async () => {
            try {
                const { data } = await axios.get("/profile", { withCredentials: true });
                dispatch(setUser(data));
            } catch (error) {
                console.error("Error fetching user data:", error);
                dispatch(clearUser());
            }
        };

        if (isLoggedIn) {
            getUserProfile();
        }
    }, [dispatch, isLoggedIn]);

    const logoutHandler = async () => {
        try {
            await axios.post("/logout", {}, { withCredentials: true });
            dispatch(clearUser());
            navigate("/");
        } catch (error) {
            console.error("Error logging out:", error);
        }
    };

    return (
        <>
            {sidebar && (
                <div
                    onClick={() => dispatch(closeSidebar())}
                    className="fixed inset-0 bg-gray-900 z-40 bg-opacity-50"
                ></div>
            )}
            <div className={`transform ${sidebar ? "-translate-x-0" : "-translate-x-full"} h-screen bg-gradient-to-r from-slate-900 to-slate-700 border-r shadow-lg border-gray-600 text-gray-200 flex flex-col fixed top-0 bottom-0 left-0 w-2/4 md:w-2/5 px-5 py-3 transition-transform z-50`}>
                <div className='flex items-center justify-between'>
                    <p>Welcome, {user && user.fullName ? user.fullName : "Guest"}</p>
                    <button className='rounded-full border bg-gray-500 p-2' onClick={() => dispatch(closeSidebar())}>
                        <AiOutlineClose className='h-5 w-5 text-white' />
                    </button>
                </div>
                <div className='flex flex-col mt-5 space-y-3 h-full justify-between'>
                    <div className='flex flex-col mt-5 space-y-3'>
                        <button className='button bg-transparent' onClick={() => {
                            dispatch(closeSidebar());
                            navigate('/');
                        }}>
                            Home Page
                        </button>
                        <button className='button bg-transparent' onClick={() => {
                            dispatch(closeSidebar());
                            navigate('/account');
                        }}>
                            Account
                        </button>
                    </div>
                    {!isLoggedIn ? (
                        <div className='flex flex-col space-y-3'>
                            <button onClick={() => { dispatch(closeSidebar()); navigate('/login') }} className='button bg-blue-400'>Log in</button>
                            <button onClick={() => { dispatch(closeSidebar()); navigate('/register') }} className='button bg-blue-500'>Sign up</button>
                        </div>
                    ) : (
                        <div className='flex flex-col space-y-3'>
                            <button onClick={() => { dispatch(closeSidebar()); logoutHandler() }} className='button bg-red-500'>Log out</button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Sidebar;
