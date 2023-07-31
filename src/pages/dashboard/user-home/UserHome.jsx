import { useContext } from 'react';
import headerImg from '../../../assets/dash-icon.svg'
import { AuthContext } from '../../../providers/AuthProvider';
import { FaPen } from 'react-icons/fa';

const UserHome = () => {

    const { user } = useContext(AuthContext);

    return (
        <div className='pt-20 mx-5 flex gap-5'>
            <div className=' w-[70%]'>
                <div>
                    <div className=" bg-yellow-100 rounded-xl p-4 px-5 flex items-center justify-between shadow-2xl shadow-gray-300">
                        <div className='w-[60%]'>
                            <h2 className="mb-5 text-3xl font-bold">Welcome Back Nishat!</h2>
                            <p>Connect with Students, find tutoring opportunities, manage classes, connect with students, and track progress effortlessly!</p>
                        </div>

                        <div>
                            <img className='w-60 h-60' src={headerImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-[30%] h-[85vh] bg-slate-50 rounded-md p-4 shadow-2xl shadow-gray-300'>
                {/* gray-300 */}
                <div className='text-base font-medium text-gray-500 text-center mb-4'><h4>My Profile</h4></div>
                <div>
                    <div className='flex flex-col justify-center items-center gap-0.5'>
                        <img className='w-28 h-28 rounded-full ' src={user.photoURL} alt="" />
                        <p className='text-xl mt-2.5  font-bold'>{user.displayName}</p>
                        <p className='mb-2 font-semibold text-gray-'>Teacher</p>
                        <p className='text-sm font-medium'>{user.email}</p>
                        <p className='text-sm font-medium '>Tutor ID: 12345</p>
                    </div>
                    <div className='text-[#1e326e] flex gap-1.5 justify-center mt-4'>
                        <button className='border-2 border-[#1e326e] rounded-md p-2.5 px-3'><FaPen/></button>
                        <button className='border-2 border-[#1e326e] rounded-md p-1.5 px-3 font-medium'>View full profile</button>
                    </div>
                    <hr className='mt-8 w-[85%] mx-auto h-0.5 bg-gray-300'/>
                </div>

            </div>
        </div>
    );
};

export default UserHome;