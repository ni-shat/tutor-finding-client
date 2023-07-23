import { Link } from 'react-router-dom';
import e from '../../../assets/e1.png'
import icon from '../../../assets/icon.png'
import { BiLogIn, BiLogInCircle } from "react-icons/bi";

const Navbar3 = () => {

    const navItems = [
        {
            id: 1,
            title: "Home",
        },
        {
            id: 2,
            title: "Find A Tutor",
        },
        {
            id: 3,
            title: "Teachers",
        },
        {
            id: 4,
            title: "Job Board",
        },
        // {
        //     id: 5,
        //     title: "Dashboard",
        // },
        // {
        //     id: 5,
        //     title: "Become A Tutor",
        // },
    ]


    return (
        <div className='  z-10 w-full roboto-semi custom-nav'>


            {/* <div className='pt-2 w-fit flex justify-first gap-1 items-center '>
                <img className=' w-[15%] h-fit  ' src={icon} alt="" />
                <h3 className='text-white text-2xl font-bold'><span className='text-[#FACF0E]'>E</span>-Tutor</h3>
            </div> */}

            {/* daisy ui navbar */}
            <div className='w-[95%] mx-auto flex items-center'>
                <div className="navbar bg-transparent text-white">
                    <div className="navbar-start ">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {
                                    navItems.map(item => <li key={item.id}>
                                        <Link to={`/${item.title}`}>{item.title}</Link>
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
                                    <Link to={`/${item.title}`}>{item.title}</Link>
                                </li>)
                            }
                            <Link className='flex items-center font-extrabold text-sm border- px-4 py-2 bg-[#FACF0E]  text-black text- shadow-lg shadow-black  '>Become A Tutor</Link>
                            {/* <Link className='flex items-center font-extrabold text-sm border-2 px-4 py-2 border-[#FACF0E] bg-yellow-50 text-black text- shadow-lg shadow-black '>Become A Tutor</Link> */}
                        </ul>
                    </div>
                    <div className="navbar-end text-base flex gap-4  ">
                        {/* <Link className='flex items-center font-extrabold text-sm border-2 px-4 py-2 border-[#FACF0E] bg-yellow-50 text-black shadow-lg shadow-black '>Become A Tutor</Link> */}
                        {/* <Link className='flex items-center font-extrabold text-sm border- px-4 py-2  bg-[#FACF0E]  text-black text- shadow-lg shadow-black  '>Become A Tutor</Link> */}
                        
                        {/* bg-[#e7e0c3] */}
                        <a className="flex items-center gap-1 "> <BiLogInCircle className='text-base ' /> Login</a>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default Navbar3;