import React from 'react';
import e from '../../../assets/e1.png'
import icon from '../../../assets/icon.png'

const Navbar = () => {
    return (
        <div className='top-0 bg-teal-700   py-1  w-full flex justify-center items-center gap-2 '>
            <img className=' w-[3%] h-fit mt-0.5 ' src={icon} alt="" />
            <img className=' w-[6%] h-fit' src={e} alt="" />
        </div>
    );
};

export default Navbar;