import { Link, useLocation } from 'react-router-dom';
import e from '../../../assets/e1.png'
import icon from '../../../assets/icon.png'
import { BiLogOutCircle, BiLogInCircle } from "react-icons/bi";
import Login from '../../login/Login';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaAngleRight, FaBell, FaHome, FaQuestion, FaShieldAlt, FaUnlock, FaUserCircle } from 'react-icons/fa';
import ActiveLink from '../../../components/ActiveLink';
import { BeatLoader } from 'react-spinners';

const Navbar = () => {

    const location = useLocation();
    // console.log(location.state);

    // console.log(location)
    console.log(location.pathname)
    const { user, logOut, loading } = useContext(AuthContext);
    console.log(user?.photoURL)

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
        {
            id: 5,
            title: "Dashboard",
            route: '/dashboard/userhome'
        },
        // {
        //     id: 5,
        //     title: "Become A Tutor",
        // },
    ]

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const hamburgerMenu =
        <>
            <div className="dropdown">
                <label className={`  text-black swap swap-rotate `}>
                    <input type="checkbox" />
                    <svg onClick={toggleMenu}
                        className={`swap-off fill-current rounded-full p-1.5 bg-base-200 mt-1 hover:bg-base-300`}

                        xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>

                    <svg onClick={toggleMenu}
                        className={`swap-on fill-current rounded-full p-1.5 bg-base-200 mt-1 hover:bg-base-300`}
                        xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>
                </label>
                {
                    isMenuOpen &&
                    <>
                        {
                            (location.pathname == ('/dashboard/userhome')) ?
                                <>
                                    <ul className="menu menu-sm w-fit  absolute -left-32 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box  text-black">

                                        <li><Link>E-Tutor | Home<FaAngleRight /></Link></li>
                                        <li><Link>Frequently Asked Questions <FaQuestion className='-ml-[5px]' /></Link></li>
                                        <li><Link>Privacy Policy <FaUnlock /></Link></li>
                                        <hr className='mt-2 mb-1' />
                                        <li className='text-[#1e326e]'><Link>Log Out <BiLogOutCircle /></Link></li>
                                    </ul>
                                </> :

                                <ul className="menu menu-sm w-fit pr-8 absolute -left-4 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box  text-black">
                                    {
                                        navItems.map(item => <li key={item.id}>
                                            <ActiveLink to={item.route}>{item.title}</ActiveLink>
                                        </li>)
                                    }
                                    <li onClick={handleLogOut}><p>Sign out</p></li>
                                </ul>
                        }
                    </>
                }
            </div>
        </>

    const [isModalOpen, setModalOpen] = useState(true);
    const closeModal = () => {
        setModalOpen(false);
    };
    const openModal = () => {
        setModalOpen(true);
    };

    if(loading) {
       return <BeatLoader className='absolute top-2/4 -translate-y-2.5 right-20 ' color="#1e326e" />
    }


    return (
        <div>
            <div className={`${((location.pathname == ('/')) || (location.pathname == ('/dashboard/userhome'))) ? 'bg-transparent' : 'bg-black'} 
            
            z-50 w-full roboto-semi custom-nav`}>
                {/* daisy ui navbar */}
                <div className='w-[95%] mx-auto flex items-center'>
                    <div className="navbar text-white">
                        <div className="navbar-start ">
                            <div className='lg:hidden'>
                                {hamburgerMenu}
                            </div>


                            <div className=' w-fit items-center justify-first gap-1   flex  '>
                                <img className=' w-[15%]  h-fi  ' src={icon} alt="" />
                                <h3 className='text-white text-2xl font-bold'><span className='text-[#FACF0E]'>E</span>-Tutor</h3>
                            </div>

                        </div>
                        <div className="navbar-center hidden lg:flex items-center ">
                            {
                                (location.pathname == ('/dashboard/userhome')) ||
                                <ul className={`text-sm  menu-horizontal font-medium  flex gap-8 items-center px-1 `}>
                                    {
                                        navItems.map(item => <li key={item.id}>
                                            <ActiveLink to={item.route}>
                                                {/* {item.title} */}
                                                {
                                                    (item.title === "Dashboard" && user) && item.title
                                                }
                                                {
                                                    (item.title !== "Dashboard") && item.title
                                                }
                                            </ActiveLink>
                                        </li>)
                                    }
                                    {
                                        !user && <Link to='/become-a-tutor' className='flex items-center font-extrabold text-sm border- px-4 py-2 bg-[#FACF0E]  text-black text- shadow-lg shadow-black  -ml-[29px]'>Become A Tutor</Link>
                                    }

                                    {/* <Link className='flex items-center font-extrabold text-sm border-2 px-4 py-2 border-[#FACF0E] bg-yellow-50 text-black text- shadow-lg shadow-black '>Become A Tutor</Link> */}
                                </ul>
                            }

                        </div>

                        <div className="navbar-end text-base   space-x-3 ">
                            {/* -mr-[6.15px] */}
                            {/* <Link className='flex items-center font-extrabold text-sm border-2 px-4 py-2 border-[#FACF0E] bg-yellow-50 text-black shadow-lg shadow-black '>Become A Tutor</Link> */}
                            {/* <Link className='flex items-center font-extrabold text-sm border- px-4 py-2  bg-[#FACF0E]  text-black text- shadow-lg shadow-black  '>Become A Tutor</Link> */}



                            <div className='space-y-3 items-center  md:flex md:space-y-0 '>
                                {
                                    user ?
                                        <>
                                            {
                                                (location.pathname == ('/dashboard/userhome')) ?
                                                    <>
                                                        {hamburgerMenu}
                                                    </>

                                                    :
                                                    <label onClick={handleLogOut} htmlFor="my-modal-3" className="flex items-center gap-1 hover:text-[#FACF0E] hover:cursor-pointer "> <BiLogOutCircle className='text-base ' /> Log out</label>
                                            }
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
                                            // if user is available and the route is dashboard and not dashboard
                                            (location.pathname == ('/dashboard/userhome')) ?
                                                <>
                                                    <FaBell className='text-black w-6 h-6' />
                                                </>
                                                :
                                                <>
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

export default Navbar;