import React from 'react';
import { Link } from 'react-router-dom';
import './Navber.css'
const Navbar = () => {
    return (
        <div className='navbar scroll-smooth'>
            <Link to="/" className='link-btn1'>Home</Link>
            {window.localStorage.getItem('token')?<button>Singout</button>:<Link to="/login" className='link-btn2'>Login</Link>}
            <Link to="/show" >Show Data</Link>
        </div>
    );
};

export default Navbar;