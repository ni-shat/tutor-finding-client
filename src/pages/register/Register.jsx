import React, { useState } from 'react';
import useSubNav from '../../hooks/useSubNav';
import one from '../../assets/one.svg'
import DotSvg from '../../components/DotSvg';
import bg from '../../assets/signup.jpg';
import twt from '../../assets/twitter.svg';
import ggl from '../../assets/ggl.svg';
import fb from '../../assets/fb.svg';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import { FaAngleDown, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Swal from 'sweetalert2';

const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;


const Register = () => {

    const subNav = useSubNav('Register');
    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedItem, setSelectedItem] = useState(''); // keep track of the selected dropdown item
    const [isOpen, setIsOpen] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState("As Student");

    const { createUser, updateUserProfile, user } = useContext(AuthContext);
    const navigate = useNavigate();

    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    const { register, handleSubmit, reset, formState: { errors }, watch } = useForm();
    const password = watch('password');


    const onSubmit = data => {
        data['gender'] = selectedItem;
        data['photoURL'] = selectedFile;
        if (selectedOption === 'As Student') data['role'] = 'Student';
        else data['role'] = 'Tutor';

        console.log(data)

        const formData = new FormData();
        // console.log(data.photoURL[0])
        formData.append('image', data.photoURL); // image is a property in formData
        console.log(img_hosting_url)
        // console.log(formData)

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {

                console.log(imgResponse);

                // if (imgResponse.success) {
                let imgURL;
                if (imgResponse.success) {
                    imgURL = imgResponse.data.display_url;
                } else {
                    imgURL = "";
                }

                // firebase creating user via email
                createUser(data.email, data.password)
                    .then(result => {
                        const loggedUser = result.user;
                        console.log(loggedUser);

                        // update user
                        updateUserProfile(data.name, imgURL)
                            .then(() => {
                                const saveUser = {
                                    name: data.name,
                                    email: data.email,
                                    userImage: imgURL,
                                    role: data.role || "",
                                    phone: data.phone || "",
                                    gender: data.gender || ""
                                }
                                // after updating post data into DB
                                fetch(`http://localhost:5000/users?email=${data.email}`, {
                                    method: 'POST',
                                    headers: {
                                        'content-type': 'application/json'
                                    },
                                    body: JSON.stringify(saveUser)
                                })
                                    .then(res => res.json())
                                    .then(data => {
                                        if (data.insertedId) {
                                            reset();
                                            Swal.fire({
                                                position: 'top-end',
                                                icon: 'success',
                                                title: 'User created successfully.',
                                                showConfirmButton: false,
                                                timer: 1500
                                            });
                                            navigate('/');
                                        }
                                    })
                                // end posting data into DB
                            })
                    })
                // }

            })

    };


    const handleFileChange = (event) => {
        console.log(event.target.files[0])
        const file = event.target.files[0];
        setSelectedFile(file);
    };

    const handleItemClick = (item) => {
        setSelectedItem(item); // Update the selected item when an option is clicked
        setIsOpen(false);
    };
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleRadioChange = (event) => {
        setSelectedOption(event.target.value);
    };




    return (
        <div className='w-full'>
            <Helmet>
                <title>LookAround | Register</title>
            </Helmet>

            <header>{subNav}</header>


            <main className='relative pt-20'>
                {/* wrapper container container */}
                <div className='flex flex-col lg:w-full lg:flex-row items-center justify-center'>

                    <div className="flex gap-20 lg:gap-8 items-center py-5 lg:pl-28 lg:pr-10 lg:py-20 lg:flex-row w-[100%] mx-auto flex-col-reverse justify-between">

                        {/* form child div */}
                        <div className="mt-20 ml-10 lg:ml-0 relative lg:pb-12 pr-12 lg:mt-0 w-10/12  lg:w-[52%]">
                            <div className="flex flex-col items-start justify-start pt-10 pr-10 pb-3.5 pl-10 bg-white shadow-2xl  relative z-10">

                                <p className="w-full text-4xl font-medium text-center leading-snug mave">Sign up for an account</p>

                                <hr className="h-px my-4 mb-12 bg-slate-50 border-2 border-[#FACF0E] dark:bg-slate-50 w-10/12 mx-auto" />

                                <div className="flex gap-4 w-full mb-1">
                                    {/* <!-- as tutor --> */}
                                    <label className="flex gap-3.5 items-center border rounded-full px-5 py-3 w-[35%] hover:cursor-pointer ml-2 font-medium text-gray-600 text-xl">
                                        <input type="radio" checked={selectedOption === "As Tutor"} onChange={handleRadioChange} name="default-radio" value="As Tutor"
                                            className="w-4 h-4 text-slate-50  border-gray-300 hover:cursor-pointer focus:ring-slate-50 dark:focus:ring-slate-50 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 bg-slate-300" />
                                        <p className='-mt-[3px]'>As Tutor</p>
                                    </label>
                                    {/* <!-- as student --> */}
                                    <label className="
                                        flex items-center gap-3.5 border rounded-full px-5 py-3 w-[35%] hover:cursor-pointer ml-2 font-medium text-gray-600 text-xl">
                                        <input type="radio" checked={selectedOption === "As Student"} onChange={handleRadioChange} name="default-radio" value="As Student"
                                            className="w-4 h-4 text-slate-50 bg-gray-100 border-gray-300 hover:cursor-pointer focus:ring-slate-50 dark:focus:ring-slate-50 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <p className='-mt-[3px]'>As Student</p>
                                    </label>
                                </div>
                                {/* <!-- as tutor, as gurdian end --> */}

                                <div className="w-full mt-6 ml-0 relative">
                                    <form onSubmit={handleSubmit(onSubmit)} className="">

                                        <div className="relative top-0 mb-5">
                                            <p className="bg-white px-2 -mt-3 ml-2 font-medium text-gray-600 absolute">
                                                Name <span className="text-red-600 px-1">*</span>
                                            </p>
                                            <input type="text"  {...register("name", { required: true })} name="name" placeholder="name" className="border placeholder-gray-400 focus:outline-none   focus:border-black w-full py-3.5 pr-4 pl-4 mt-2 ml-0 text-base block bg-white border-gray-300" />
                                            {errors.name && <span className="text-red-600 px-1">Name is required</span>}
                                        </div>

                                        {/* email & mobile */}
                                        <div className="flex gap-5 mb-5">
                                            <div className="w-2/4">
                                                <p className="bg-white px-2 -mt-1.5 ml-2 font-medium text-gray-600 absolute">Email <span className="text-red-600 px-1">*</span>
                                                </p>
                                                <input type="email" {...register("email", { required: true })} name="email" placeholder="example@email.com" className="border placeholder-gray-400 focus:outline-none focus:border-black w-full py-3.5 pr-4 pl-4 mt-2 ml-0 text-base block bg-white border-gray-300 " />
                                                {errors.email && <span className="text-red-600 px-1">Email is required</span>}
                                            </div>
                                            <div className="w-2/4">
                                                <p className="bg-white pr-2 pl-2 -mt-1.5 ml-2 font-medium text-gray-600 absolute">Mobile
                                                </p>
                                                <input type="text" {...register("phone", {
                                                    pattern: /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/
                                                })} name="phone" placeholder="(+88)01234567891" className="border placeholder-gray-400 focus:outline-none  focus:border-black w-full py-3.5 pr-4 pl-4 mt-2 ml-0 text-base block bg-white border-gray-300" />

                                                {errors.phone?.type === 'pattern' && <p className="text-red-600 px-1">Invalid phone number</p>}
                                            </div>
                                        </div>


                                        <div className="flex gap-5 mb-7">
                                            <div className="w-2/4 relative">
                                                <p className="bg-white pr-2 pl-2 -mt-1.5 ml-2 font-medium text-gray-600 absolute z-10">Photo
                                                </p>
                                                <input onChange={handleFileChange}
                                                    //  {...register("photoURL", { required: true })} 
                                                    type="file" className="absolute top-[7.7px] inset-0 opacity-0 z-10 hover:cursor-pointer border placeholder-gray-400 focus:outline-none  focus:border-black w-full py-0 h-[53px] pr-4 pl-4 mt-0 ml-0 text-base block bg-white border-gray-300" />
                                                <div className="px-4 h-[50.5px] border border-gray-300 relative top-[7.7px] flex items-center ">
                                                    <span className={`text-sm ${selectedFile ? 'text-gray-600' : 'text-gray-400'}`}>{selectedFile ? selectedFile.name : 'Choose a file...'}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="w-2/4">
                                                <p className="bg-white pr-2 pl-2 -mt-1.5 ml-2 font-medium text-gray-600 absolute z-10">Gender
                                                </p>

                                                {/* dropdown */}
                                                <div className="dropdown dropdown-bottom dropdown-end bg-white  w-full ">
                                                    <label onClick={toggleDropdown} tabIndex={0} className={` w-full bg-white py-3.5 px-4 mt-2 ml-0 text-sm ${selectedItem ? 'text-gray-600' : 'text-gray-400'} border border-gray-300 focus:outline-none focus:border-black flex justify-between items-center`}>
                                                        {selectedItem || 'Choose a gender'}
                                                        <FaAngleDown className="mt-1" />
                                                    </label>
                                                    {isOpen && (
                                                        <ul
                                                            tabIndex={0}
                                                            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                                            <li>
                                                                <a onClick={() => handleItemClick('Male')}>Male</a>
                                                            </li>
                                                            <li>
                                                                <a onClick={() => handleItemClick('Female')}>Female</a>
                                                            </li>
                                                        </ul>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="relative top-0 mb-7">
                                            <p className="bg-white pr-2 pl-2 -mt-3 ml-2 font-medium text-gray-600 absolute">
                                                Password
                                                <span className="text-red-600 px-1">*</span>
                                            </p>
                                            <input
                                                type={passwordVisible ? 'text' : 'password'}
                                                {...register("password", {
                                                    required: true, minLength: 6,
                                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/
                                                })} placeholder="Password" className="border placeholder-gray-400 focus:outline-none  focus:border-black w-full py-3.5 pr-4 pl-4 mt-2 ml-0 text-base block bg-white  border-gray-300 " />
                                            <FaEye onClick={togglePasswordVisibility} className={`${passwordVisible ? 'absolute' : 'hidden'} absolute top-2/4 -translate-y-2 right-4`} />
                                            <FaEyeSlash onClick={togglePasswordVisibility} className={`${passwordVisible ? 'hidden' : 'absolute'} top-2/4 -translate-y-2 right-4`} />

                                            {errors.password?.type === 'required' && <p className="text-red-600 px-1">Password is required</p>}
                                            {errors.password?.type === 'minLength' && <p className="text-red-600 px-1">Password must be 6 characters</p>}
                                            {errors.password?.type === 'maxLength' && <p className="text-red-600 px-1">Password must be less than 20 characters</p>}
                                            {errors.password?.type === 'pattern' && <p className="text-red-600 px-1">Password must have one Uppercase, one number and one special character.</p>}
                                        </div>

                                        <div className="relative mb-10">
                                            <p
                                                className="bg-white pr-2 pl-2 -mt-3 ml-2 font-medium text-gray-600 absolute">
                                                Confirm Password
                                                <span className="text-red-600 px-1">*</span>
                                            </p>
                                            <input
                                                type={passwordVisible ? 'text' : 'password'}
                                                {...register("confirmPassword", {
                                                    required: true,
                                                    validate: (value) => value === password || 'Passwords do not match',
                                                })}
                                                placeholder="Password" id="conPass" className="border placeholder-gray-400 focus:outline-none focus:border-black w-full py-3.5 pr-4 pl-4 mt-2 ml-0 text-base block bg-white  border-gray-300 " />

                                            <FaEye onClick={togglePasswordVisibility} className={`${passwordVisible ? 'absolute' : 'hidden'} absolute top-2/4 -translate-y-2 right-4 hover:cursor-pointer`} />
                                            <FaEyeSlash onClick={togglePasswordVisibility} className={`${passwordVisible ? 'hidden' : 'absolute'} top-2/4 -translate-y-2 right-4 hover:cursor-pointer`} />
                                            {errors.password?.type === 'required' && <p className="text-red-600 px-1">Password is required</p>}
                                            {errors.confirmPassword?.type === 'validate' && <p className="text-red-600 px-1">{errors.confirmPassword.message}</p>}
                                        </div>

                                        <div className="relative -top-4">
                                            <div className="inline-flex w-max gap-6">
                                                <div className="inline-flex items-center">
                                                    <label className="relative flex cursor-pointer items-center rounded-full p-3"

                                                        data-ripple-dark="true">
                                                        <input type="checkbox"
                                                            {...register("checkbox", { required: true })} name="checkbox"

                                                            className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none  border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#1e326e] checked:bg-[#1e326e] checked:before:bg-[#1e326e] hover:before:opacity-10"
                                                            id="checkbox-5" />
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
                                            {errors.checkbox?.type === 'required' && <p className="text-red-600 px-1">You need to agree terms and conditions before proceed</p>}
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
                            <div className='absolute top-0 right-0 '><DotSvg color='#FACF0E'></DotSvg></div>

                            {/* blue dot */}
                            <div className='absolute bottom-0 left-0 '>
                                <DotSvg color='#1e326e'></DotSvg>
                            </div>

                        </div>

                        {/* image child div */}
                        <div className="w-10/12 bg-cover relative lg:w-[48%] bg-slate-500">
                            <div className="flex flex-col items-center justify-center  h-full relative ">
                                <img src={bg} alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </main>


        </div>
    );
};

export default Register;