import React, { useContext } from 'react';
import logo from '../../assets/logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProviders';

const NavBar = () => {
    const {user , logout}= useContext(AuthContext); 
    const navigate = useNavigate();
    const navItems = [
        {
            label: 'Home',
            url: '/'
        },
        {
            label: 'About',
            url: '/about'
        },
        {
            label: 'Contact',
            url: '/contact'
        }
    ];

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                    </ul>
                </div>
                <a className="normal-case text-xl">
                    <img src={logo} className='h-[50px]' alt="" />

                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navItems.map(item => <li key={item.url}><Link to={item.url}>{item.label}</Link></li>)
                    }
                    <li>{user ? <button onClick={()=> {
                        logout();
                        navigate('/');
                    }} className='btn btn-ghost'>Log out</button> : <button onClick={()=>navigate('/login')} className='btn btn-ghost'>Login </button>}</li>
                </ul>
            </div>
            <div className="navbar-end">
                <button className='px-4 py-2 rounded-md font-bold border-2 border-[#FF3811] text-[#FF3811]'>Appointment</button>
            </div>
        </div>
    );
};

export default NavBar;