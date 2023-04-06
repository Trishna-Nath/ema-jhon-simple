import React from 'react';
import './Header.css';
 import logo from '../../images/favicon.ico';
import { Link } from 'react-router-dom';
// import logo from '../../images/Logo.svg';

const Header = () => {
    return (


        <nav className='header'>
            <img className='image' src={logo} alt="" />
            <div>
            <Link to="/">Shop</Link>
            <Link to="/orders">Order</Link>
            <Link to="/inventory">Inventory</Link>
            <Link to="/login">Login</Link>

            </div>
            
        </nav>
    );
};

export default Header;