import { Link, useLocation } from 'react-router-dom';
import e from '../../../assets/e1.png'
import icon from '../../../assets/icon.png'
import { BiLogOutCircle, BiLogInCircle } from "react-icons/bi";
import Login from '../../login/Login';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const Navbar3 = () => {

    const location = useLocation();
    // console.log(location.state);

    // console.log(location)
    console.log(location.pathname)
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const navItems = [
        {
            id: 1,
            title: "Home",
            route: '/'
        },
        {
            id: 2,
            title: "Find A Tutor",
            route: '/find-a-tutor'
        },
        {
            id: 3,
            title: "Teachers",
            route: '/teachers'
        },
        {
            id: 4,
            title: "Job Board",
            route: '/job-board'
        },
        // {
        //     id: 5,
        //     title: "Dashboard",
        //     route: '/dashboard'
        // },
        // {
        //     id: 5,
        //     title: "Become A Tutor",
        // },
    ]

    const [isModalOpen, setModalOpen] = useState(true);
    const closeModal = () => {
        setModalOpen(false);
    };
    const openModal = () => {
        setModalOpen(true);
    };


    return (
        <div>

            <div className={`${(location.pathname == ('/')) ? 'bg-transparent' : 'bg-black'}  z-50 w-full roboto-semi custom-nav`}>
                {/* daisy ui navbar */}
                <div className='w-[95%] mx-auto flex items-center'>
                    <div className="navbar text-white">
                        <div className="navbar-start ">
                            <div className="dropdown">
                                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                </label>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    {
                                        navItems.map(item => <li key={item.id}>
                                            <Link to={item.route}>{item.title}</Link>
                                        </li>)
                                    }

                                </ul>
                            </div>

                            <div className=' w-fit items-center justify-first gap-1   flex  '>
                                <img className=' w-[15%]  h-fi  ' src={icon} alt="" />
                                <h3 className='text-white text-2xl font-bold'><span className='text-[#FACF0E]'>E</span>-Tutor</h3>
                            </div>

                        </div>
                        <div className="navbar-center hidden lg:flex items-center ">
                            <ul className="text-sm  menu-horizontal font-medium  flex gap-8 items-center px-1">
                                {
                                    navItems.map(item => <li key={item.id}>
                                        <Link to={item.route}>{item.title}</Link>
                                    </li>)
                                }
                                <Link to='/become-a-tutor' className='flex items-center font-extrabold text-sm border- px-4 py-2 bg-[#FACF0E]  text-black text- shadow-lg shadow-black  '>Become A Tutor</Link>
                                {/* <Link className='flex items-center font-extrabold text-sm border-2 px-4 py-2 border-[#FACF0E] bg-yellow-50 text-black text- shadow-lg shadow-black '>Become A Tutor</Link> */}
                            </ul>
                        </div>

                        <div className="navbar-end text-base   space-x-3 -mr-[6.15px]">
                            {/* <Link className='flex items-center font-extrabold text-sm border-2 px-4 py-2 border-[#FACF0E] bg-yellow-50 text-black shadow-lg shadow-black '>Become A Tutor</Link> */}
                            {/* <Link className='flex items-center font-extrabold text-sm border- px-4 py-2  bg-[#FACF0E]  text-black text- shadow-lg shadow-black  '>Become A Tutor</Link> */}




                           

                            <div className='space-y-3 items-center  md:flex md:space-y-0 '>
                                {
                                    user ?
                                        <><label onClick={handleLogOut} htmlFor="my-modal-3" className="flex items-center gap-1 hover:text-[#FACF0E] hover:cursor-pointer "> <BiLogOutCircle className='text-base ' /> Log out</label>
                                            </>
                                        :
                                        <>
                                            <label htmlFor="my-modal-3" className="flex items-center gap-1 hover:text-[#FACF0E] hover:cursor-pointer "> <BiLogInCircle className='text-base ' /> Login</label>
                                            {
                                                isModalOpen && <Login setModalOpen={setModalOpen} closeModal={closeModal} openModal={openModal}></Login>

                                            }
                                        </>
                                }
                            </div>
                            {user && <span className='hidden w-px h-6 bg-gray-300 md:block'></span>} 

                            <div className='xl:flex flex-col xl:flex-row space-y-3 xl:space-y-0 xl:space-x-5 xl:items-center hidden'>
                                {
                                    user && <>
                                        {
                                            user.displayName ?
                                                <div className="tooltip tooltip-bottom  border-[1.8px] hover:cursor-pointer transition-all duration-500 rounded-full hover:border-gray-400" data-tip={user.displayName}>
                                                    {
                                                        user.photoURL ? <img className='rounded-full w-8 h-8 object-cover' src={user.photoURL} alt="" />
                                                            : <FaUserCircle className='w-8 h-8 text-gray-500' />
                                                    }
                                                </div> :
                                                <div className=' border-[1.8px] hover:cursor-pointer transition-all duration-500 rounded-full hover:border-gray-400'>
                                                    {
                                                        user.photoURL ? <img className='rounded-full w-8 h-8 object-cover' src={user.photoURL} alt="" />
                                                            : <FaUserCircle className='w-8 h-8 text-gray-500' />
                                                    }
                                                </div>
                                        }
                                    </>
                                }
                            </div>



                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Navbar3;