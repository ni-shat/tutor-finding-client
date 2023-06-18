import logo from '../../../assets/logo.png'
import e from '../../../assets/e1.png'
import icon from '../../../assets/icon.png'
// import icon from '../../../assets/icon.png'

const Navbar2 = () => {
    return (
        <div className='top-0 left-0 pt-0 bg-[#416F6A]   w-full flex items-center gap-2  '>
            {/* <img className=' w-[14%] mx-28' src={logo} alt="" />
            <div className='flex justify-center items-center w-full'>
                <img className=' w-[3%] h-fit mt-0.5 ' src={icon} alt="" />
                <img className=' w-[6%] h-fit' src={e} alt="" />
            </div> */}

            <div className="navbar w-full bg-black bg-opacity-20">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
                    <div className="navbar-center ">
                        <ul className=" hidden lg:flex gap-6 justify-end w-[500px] text-white mx-4">
                            <li>Home</li>
                            <li>
                                Tutors
                            </li>
                            <li>Dashboard</li>
                        </ul>
                    </div>
                </div>
                <div className='flex items-center   justify-center gap-2 w-fit'>
                    <img className=' w-[15%] h-fit mt-1 ' src={icon} alt="" />
                    {/* <img className=' w-[12%] h-fit' src={e} alt="" /> */}
                    <h3 className='text-white text-2xl font-semibold'><span className='text-[#FACF0E]'>E</span>-Tutor</h3>
                </div>
                <div className="navbar-end">
                <div className="navbar  ">
                        <ul className=" hidden lg:flex gap-6 justify-start w-[500px] text-white ml-14">
                            <li>Home</li>
                            <li>
                                Tutors
                            </li>
                            <li>Dashboard</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar2;