import React from 'react';
import logo from '../../../assets/logo.png'

const Navbar = () => {
    return (
        <div className='top-0 bg-teal-800  py-1  w-full flex justify-first '>
            <img className='mx-32 w-[12%]' src={logo} alt="" />
        </div>
    );
};

export default Navbar;