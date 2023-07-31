import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaNewspaper, FaColumns, FaInfo, FaRegStickyNote, FaInfoCircle, FaUserAlt, FaRegListAlt, FaRegSun, FaRocketchat, FaGratipay, FaHandsHelping, FaUserCircle, FaBookReader, FaQuestion, FaUnlock } from 'react-icons/fa';
// import logo from '../../../../assets/logo-black.svg'
import ActiveLink from '../../../components/ActiveLink';
import { } from "react-icons/bi";
import { AuthContext } from '../../../providers/AuthProvider';
import { useContext } from 'react';

const ULTeacher = () => {

    


    return (
        <div className='font-medium'> 
            
            <ul className=" px-8  mt-0  w-80 h-full">
                {
                    <>
                        {/* <li className="flex">
                            <Link className="w-[30%]" to='/'><img className='w-[100%] -ml-2' src={logo} alt="" /></Link>
                            
                        </li> */}

                        <li className="text-transparent mt-2">hi</li>
                        <li className='hover:pl-3 transition-all duration-500'>
                            <ActiveLink to="/dashboard/userhome">
                                <button className="flex items-center gap-4 mb-5 mt-3"><FaHome FaHouseUser /> <p className=''>Dashboard</p></button>
                            </ActiveLink>
                        </li>
                        <li className='hover:pl-3 transition-all duration-500'>
                            <ActiveLink to="/dashboard/teacher-profile">
                                <button className="flex items-center gap-4 mb-5 mt-3"><FaUserAlt className='w-3.5 h-3.5 mr-0.5' /> <p className=''>Profile</p></button>
                            </ActiveLink>
                        </li>
                        <li className='hover:pl-3 transition-all duration-500'>
                            <ActiveLink to="/dashboard/job-board"> <button className="flex items-center gap-4 mb-5"><FaNewspaper /> <p className=''>Job Board</p></button>
                            </ActiveLink>
                        </li>
                        <li className='hover:pl-3 transition-all duration-500'>
                            <ActiveLink to="/dashboard/class-listing"><button className="flex items-center gap-4 mb-5"><FaRegListAlt /> <p className=''>Class Listing</p></button>
                            </ActiveLink>
                        </li>
                        <li className='hover:pl-3 transition-all duration-500'>
                            <ActiveLink to="/dashboard/status"><button className="flex items-center gap-4 mb-5"><FaInfoCircle /> <p className=''>Status</p></button>
                            </ActiveLink>
                        </li>
                        <li className='hover:pl-3 transition-all duration-500'>
                            <ActiveLink to="/dashboard/communication"><button className="flex items-center gap-4 mb-5"><FaRocketchat /> <p className=''>Communication</p></button>
                            </ActiveLink>
                        </li>
                        <li className='hover:pl-3 transition-all duration-500'>
                            <ActiveLink to="/dashboard/reviews"><button className="flex items-center gap-4 mb-5"><FaGratipay /> <p className=''>Reviews & Ratings</p></button>
                            </ActiveLink>
                        </li>
                        <li className='hover:pl-3 transition-all duration-500'>
                            <ActiveLink to="/dashboard/status"><button className="flex items-center gap-4 mb-5"><FaRegSun /> <p className=''>Settings</p></button>
                            </ActiveLink>
                        </li>
                        <li className='hover:pl-3 transition-all duration-500'>
                            <ActiveLink to="/dashboard/support"><button className="flex items-center gap-4 mb-5"><FaHandsHelping /> <p className=''>Support & Help Center</p></button>
                            </ActiveLink>
                        </li>
                    </>
                }

                <div className="divider h-[0.1px] bg-white w-[80%] my-6"></div>

                <li className='hover:pl-3 transition-all duration-500'><ActiveLink to="/order/salad"><button className="flex items-center gap-4 mb-5"><FaQuestion className='-ml-[2px]'/> <p className=''>FAQ</p></button> </ActiveLink></li>
                <li className='hover:pl-3 transition-all duration-500'><ActiveLink to="/order/salad"><button className="flex items-center gap-4 mb-5"><FaUnlock  className='-ml-[2px]'/><p className=''>Privacy Policy</p></button> </ActiveLink></li>
                
                <li className='hover:pl-3 transition-all duration-500'><ActiveLink to="/order/salad"><button className="flex items-center gap-4 mb-5"><FaBookReader/> <p className=''>About Us</p></button> </ActiveLink></li>


                {/* <li className='hover:pl-3 transition-all duration-500'><ActiveLink to="/order/salad"><button className="flex items-center gap-4 mb-5"><FaBookReader/> <p className=''>Join our Community</p></button> </ActiveLink></li> */}
            </ul>
        </div>
    );
};

export default ULTeacher;