
import { FaHome } from 'react-icons/fa';
import ActiveLink from '../../../components/ActiveLink';

const ULStudent = () => {
    return (
        <div>
            <ul className=" px-8  -mt-8  w-80 h-full">
                        {
                            <>
                                {/* <li className="flex">
                                    <Link className="w-[30%]" to='/'><img className='w-[100%] -ml-2' src={logo} alt="" /></Link>
                                </li> */}
                                <li className="text-transparent mt-2">hi</li>
                                <li>
                                    <ActiveLink to="/dashboard/userHome">
                                        <button className="flex items-center gap-2 mb-5 mt-3"><FaHome></FaHome> <p>User Home</p></button>
                                    </ActiveLink>
                                </li>
                                <li>
                                    <ActiveLink to="/dashboard/profile"> <button className="flex items-center gap-2 mb-5"><FaHome></FaHome> <p>Profile</p></button>
                                    </ActiveLink>
                                </li>
                                <li>
                                    <ActiveLink to="/dashboard/job-board"><button className="flex items-center gap-2 mb-5"><FaHome></FaHome> <p>Job Board</p></button>
                                    </ActiveLink>
                                </li>
                                <li>
                                    <ActiveLink to="/dashboard/class-listing"><button className="flex items-center gap-2 mb-5"><FaHome></FaHome> <p>Class Listing</p></button>
                                    </ActiveLink>
                                </li>
                                <li>
                                    <ActiveLink to="/dashboard/status"><button className="flex items-center gap-2 mb-5"><FaHome></FaHome> <p>Status</p></button>
                                    </ActiveLink>
                                </li>
                            </>
                        }

                        <div className="divider h-[0.1px] bg-black w-[80%]"></div>
                        <li><ActiveLink to="/"><button className="flex items-center gap-2 my-5"><FaHome></FaHome> <p>User Home</p></button> </ActiveLink> </li>
                        <li><ActiveLink to="/menu"> <button className="flex items-center gap-2 mb-5"><FaHome></FaHome> <p>User All Classes</p></button> </ActiveLink></li>
                        <li><ActiveLink to="/order/salad"><button className="flex items-center gap-2 mb-5"><FaHome></FaHome> <p>Enroll</p></button> </ActiveLink></li>
                        <li><ActiveLink to="/order/salad"><button className="flex items-center gap-2 mb-5"><FaHome></FaHome> <p>About Us</p></button> </ActiveLink></li>
                    </ul>
        </div>
    );
};

export default ULStudent;