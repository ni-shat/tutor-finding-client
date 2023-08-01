import { FaAngleRight, FaBell, FaQuestion, FaUnlock } from 'react-icons/fa';
import icon from '../assets/icon.png';
import useAdmin from '../hooks/useAdmin';
import useStudent from '../hooks/useStudent';
import useTeacher from '../hooks/useTeacher';
import ULAdmin from '../pages/dashboard/admin/ULAdmin';
import ULStudent from '../pages/dashboard/student/ULStudent';
import ULTeacher from '../pages/dashboard/tutor/ULTeacher';
import Navbar from '../pages/shared/navbar/Navbar';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { BiLogOutCircle } from 'react-icons/bi';
import { createContext, useContext, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { BeatLoader } from 'react-spinners';


const Dashboard = () => {

    // const isStudent = true;
    const [isAdmin] = useAdmin();
    const [isStudent] = useStudent();
    const [isTeacher] = useTeacher();

    // console.log("istutor", isTeacher)
    // console.log("isstudent", isStudent)
    // console.log("isadmin", isAdmin)

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const { user, logOut, loading } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }


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
                    <ul className="menu menu-sm w-fit  absolute -left-28 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box  text-black">

                        <li><Link to='/'>E-Tutor | Home<FaAngleRight /></Link></li>
                        {/* <li><Link>Frequently Asked Questions <FaQuestion className='-ml-[5px]' /></Link></li>
                        <li><Link>Privacy Policy <FaUnlock /></Link></li> */}
                        <hr className='mt-2 mb-1' />
                        <li onClick={handleLogOut} className='text-[#1e326e]'><Link to='/'>Log Out <BiLogOutCircle /></Link></li>
                    </ul>
                }
            </div>
        </>

    const location = useLocation(); console.log(location.pathname)

    if (loading) {
        return <BeatLoader className='absolute top-2/4 -translate-y-2.5 right-20 ' color="#1e326e" />
    }



    return (
        <div className=" ">
            <div className="drawer lg:drawer-open bg-white relative">
                <div className="absolute left-20 w-full ">
                    {/* <Navbar></Navbar> */}
                </div>

                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content h-screen overflow-auto">
                    {/* Page content here */}

                    {/* nav title above the page */}
                    <div className=' fixed right-4 w-full z-20 h-16 bg-white '>
                        <div className='text-xl fixed left-[330px] top-6 font-bold ml-7  '>
                            {
                                location.pathname == ('/dashboard/userhome') &&
                                <h3>Dashboard</h3>
                            }
                        </div>

                        <div className='fixed right-8 top-3 flex  items-center gap-2'>
                            <FaBell className='text-black w-6 h-6' />
                            <span className='hidden w-px h-6 bg-gray-300 md:block'></span>
                            {hamburgerMenu}

                        </div>
                    </div>


                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                    {/* <OverflowContext.Provider value={parentClassName}> */}
                        <Outlet></Outlet>
                    {/* </OverflowContext.Provider> */}

                </div>
                <div className=" bg-[#1e326e] z-50 text-white h-screen border border-l-0 font-bold shadow-xl pt-4">
                    <label htmlFor="my-drawer-2" className="drawer-overlay "></label>
                    <div className=' w-fit ml-14 items-center justify-first gap-1 flex pb-8 '>
                        <img className=' w-[15%]   ' src={icon} alt="" />
                        <h3 className='text-white text-2xl font-bold'><span className='text-[#FACF0E]'>E</span>-Tutor</h3>
                    </div>


                    {
                        isStudent && <ULStudent></ULStudent>
                    }
                    {
                        isAdmin && <ULAdmin></ULAdmin>
                    }
                    {
                        isTeacher && <ULTeacher></ULTeacher>
                    }


                </div>
            </div>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Dashboard;