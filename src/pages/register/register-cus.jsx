import React from 'react';
import useSubNav from '../../hooks/useSubNav';
import one from '../../assets/one.svg'
import DotSvg from '../../components/DotSvg';
import bg from '../../assets/signup.jpg';
import twt from '../../assets/twitter.svg';
import ggl from '../../assets/ggl.svg';
import fb from '../../assets/fb.svg';


const Register = () => {

    const subNav = useSubNav('Register');

   

    return (
        <div className='w-full'>
            <header>{subNav}</header>


            <div className="bg-white py-16 w-full ">
                <div className="flex flex-col items-center justify-between pt-0 pb-0  mt-12 lg:mt-0  mb-0  lg:w-full  lg:flex-row ">
                    <div  className="flex gap-20 lg:gap-8 items-center  pt-5  pb-0 lg:pl-28 lg:pr-10 lg:pt-20 lg:flex-row-reverse w-[100%] mx-auto flex-col-reverse justify-between">

                        <div className="w-10/12 bg-cover relative lg:w-[48%] bg-slate-500">
                            <div className="flex flex-col items-center justify-center   h-full relative ">
                                <img src={bg} alt="" />
                            </div>
                        </div>

                        <div className="mt-20 ml-10 mr-0 mb-0 lg:ml-0 relative lg:pb-12 pr-12 lg:mt-0 w-10/12  lg:w-[52%]">
                            <div className="flex flex-col items-start justify-start pt-10 pr-10 pb-3.5 pl-10 bg-white shadow-2xl  relative z-10">

                                <p className="w-full text-4xl font-medium text-center leading-snug mave">Sign up for an account</p>

                                <hr className="h-px my-4 mb-12 bg-slate-50 border-2 border-[#1e326e] dark:bg-slate-50 w-10/12 mx-auto" />

                                <div className="flex gap-4 w-full mb-1">
                                    {/* <!-- radio --> */}
                                    <div className="flex items-center border rounded-full px-5 py-3 w-[40%]  space-x-3">
                                        <input id="default-radio-1" type="radio" value="" name="default-radio"
                                            className="w-4 h-4 text-slate-50 bg-gray-100 border-gray-300 hover:cursor-pointer focus:ring-slate-50 dark:focus:ring-slate-50 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label className="ml-2 font-medium text-gray-600 text-xl">As Tutor</label>
                                    </div>

                                    {/* <!-- radio --> */}
                                    <div className="flex items-center border rounded-full px-5 py-3 w-[40%]  space-x-3">
                                        <input checked id="default-radio-2" type="radio" value="" name="default-radio"
                                            className="w-4 h-4 text-slate-50 bg-gray-100 border-gray-300 hover:cursor-pointer focus:ring-slate-50 dark:focus:ring-slate-50 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label className="ml-2 font-medium text-gray-600 text-xl">As Gurdian</label>
                                    </div>
                                </div>
                                {/* <!-- radio container end --> */}

                                <div className="w-full  mt-6 mr-0 mb-0 ml-0 relative">

                                    <form action="" className="space-y-8">
                                        <div className="relative">

                                            <p
                                                className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">
                                                Name <span className="text-red-600">*</span></p>

                                            <input placeholder="John" type="text" className="border placeholder-gray-400 focus:outline-none
                                focus:border-black w-full py-3.5 pr-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                                border-gray-300 " required />

                                        </div>

                                        <div className="flex gap-5">
                                            <div className="w-2/4">
                                                <p
                                                    className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">
                                                    Mobile <span className="text-red-600">*</span></p>
                                                <input placeholder="(+88)01234567891" type="text" className="border placeholder-gray-400 focus:ring-0 w-full py-3.5 pr-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base bg-white
                                border-gray-300 " required />
                                            </div>

                                            <div className="w-2/4">
                                                <p
                                                    className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">
                                                    Email <span className="text-red-600">*</span></p>
                                                <input placeholder="123@ex.com" type="text" className="border placeholder-gray-400 focus:outline-none
                                focus:border-black w-full py-3.5 pr-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                                border-gray-300 " required />
                                            </div>
                                        </div>

                                        <div className="relative">
                                            <p
                                                className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">
                                                Password
                                                <span className="text-red-600">*</span>
                                            </p>
                                            <input placeholder="Password" type="password" className="border placeholder-gray-400 focus:outline-none  focus:border-black w-full py-3.5 pr-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white  border-gray-300 " required />
                                            <i className="fa-solid fa-eye relative -top-10 left-[500px] hover:cursor-pointer shown"
                                                id="shown-eye1"></i>
                                            <i className="fa-solid fa-eye-slash relative -top-10 left-[500px] hidden hover:cursor-pointer"
                                                id="hidden-eye1"></i>
                                        </div>
                                        <div className="relative">
                                            <p
                                                className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">
                                                Confirm Password
                                                <span className="text-red-600">*</span>
                                            </p>
                                            <input placeholder="Password" type="password" id="conPass" className="border placeholder-gray-400 focus:outline-none focus:border-black w-full py-3.5 pr-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white  border-gray-300 " required />
                                            <i className="fa-solid fa-eye relative -top-10 left-[500px] hover:cursor-pointer shown"
                                                id="shown-eye2"></i>
                                            <i className="fa-solid fa-eye-slash relative -top-10 left-[500px] hidden hover:cursor-pointer"
                                                id="hidden-eye2"></i>

                                        </div>

                                        <div className="relative -top-4">
                                            <div className="inline-flex w-max gap-6">
                                                <div className="inline-flex items-center">
                                                    <label className="relative flex cursor-pointer items-center rounded-full p-3"

                                                        data-ripple-dark="true">
                                                        <input type="checkbox"
                                                            className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none  border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#1e326e] checked:bg-[#1e326e] checked:before:bg-[#1e326e] hover:before:opacity-10"
                                                            id="checkbox-5" defaultChecked />
                                                        <div
                                                            className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">

                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5"
                                                                viewBox="0 0 20 20" fill="currentColor" stroke="currentColor"
                                                                strokeWidth="1">
                                                                <path fillRule="evenodd"
                                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                                    clipRule="evenodd"></path>
                                                            </svg>

                                                        </div>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="inline-block relative -top-1">I agree to the <a className="w-full underline inline font-medium text-center text-[#1e326e]  transition duration-200 hover:text-black hover:cursor-pointer ease">Terms
                                                of Use and Privacy Policy
                                            </a>
                                            </div>
                                        </div>


                                        <div className="relative">
                                            <input type="submit"
                                                className="w-full inline-block py-3 pr-5  pl-5 text-xl font-medium text-center hover:text-black
                                                 bg-[#1e326e] hover:bg-yellow-200 text-white border border-[#1e326e]
                                                  transition duration-300  hover:cursor-pointer ease "
                                                value="Sign Up" />

                                        </div>
                                    </form>
                                    <div className='mt-10 text-center'>
                                        <div>
                                            <p className='pb-5'>Connect With</p>
                                            <div>
                                                <ul className="flex justify-between -mx-2 mb-12">
                                                    <li className="px-2 w-full">
                                                        <a
                                                            href="javascript:void(0)"
                                                            className=" flex h-12 items-center justify-center rounded-md bg-[#4064AC] hover:bg-opacity-90 ">
                                                            <img src={fb} alt="" />
                                                        </a>
                                                    </li>
                                                    <li className="px-2 w-full">
                                                        <a
                                                            href="javascript:void(0)"
                                                            className="flex  h-12 items-center justify-center rounded-md bg-[#1C9CEA]  hover:bg-opacity-90 ">
                                                            <img src={twt} alt="" />
                                                        </a>
                                                    </li>
                                                    <li className="px-2 w-full">
                                                        <a
                                                            href="javascript:void(0)"
                                                            className=" flex h-12 items-center justify-center rounded-md   bg-[#D64937]  hover:bg-opacity-90">
                                                            <img src={ggl} alt="" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            {/* yellow dot */}
                            <div className='absolute top-0 left-0 '><DotSvg color='#FACF0E'></DotSvg></div>

                            {/* blue dot */}
                            <div className='absolute bottom-0 right-0 '>
                                <DotSvg color='#1e326e'></DotSvg>
                            </div>

                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Register;