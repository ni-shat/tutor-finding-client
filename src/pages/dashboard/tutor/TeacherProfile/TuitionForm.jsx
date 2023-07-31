import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../../providers/AuthProvider';
import { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import Dropdown from '../../../../components/Dropdown';




const TuitionForm = () => {

    const [selectedItem, setSelectedItem] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState("As Student");

    const { register, handleSubmit, reset, formState: { errors }, watch } = useForm();
    const { createUser, updateUserProfile, user } = useContext(AuthContext);
    const navigate = useNavigate();


    const onSubmit = data => {
        // data['gender'] = selectedItem;
        // data['photoURL'] = selectedFile;
        // if (selectedOption === 'As Student') data['role'] = 'student';
        // else data['role'] = 'tutor';

        console.log(data)



        // firebase creating user via email
        // createUser(data.email, data.password)
        // .then(result => {
        //     const loggedUser = result.user;
        //     console.log(loggedUser);

        //     // update user
        //     updateUserProfile(data.name, imgURL)
        //         .then(() => {
        //             const saveUser = {
        //                 name: data.name,
        //                 email: data.email,
        //                 role: data.role || "",
        //                 phone: data.phone || "",
        //                 gender: data.gender || ""
        //             }
        //             // after updating post data into DB
        //             fetch(`http://localhost:5000/users?email=${data.email}`, {
        //                 method: 'POST',
        //                 headers: {
        //                     'content-type': 'application/json'
        //                 },
        //                 body: JSON.stringify(saveUser)
        //             })
        //                 .then(res => res.json())
        //                 .then(data => {
        //                     if (data.insertedId) {
        //                         reset();
        //                         Swal.fire({
        //                             position: 'top-end',
        //                             icon: 'success',
        //                             title: 'User created successfully.',
        //                             showConfirmButton: false,
        //                             timer: 1500
        //                         });
        //                         navigate('/');
        //                     }
        //                 })
        //             // end posting data into DB
        //         })
        // })



    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleItemClick = (item) => {
        setSelectedItem(item); // Update the selected item when an option is clicked
        setIsOpen(false);
    };

    const itemArrDropdownCategories = ["Bangla Medium", "English Medium", "English Version", "Uni Help", "Language Learning", "Madrasha Medium", "IELTS Preparation", "Test Preparation"];



    return (
        <div className="mt-0 ml-10 lg:ml-0 relative lg:pb-12 lg:mt-8 w-10/12 z-0 lg:w-[100%]">

            <div className="flex rounded-xl shadow-2xl shadow-gray-400 flex-col items-start justify-start pt-10 pr-10 pb-3.5 pl-10 bg-white border  relative z-10">

                <p className="w-full text-4xl font-medium text-center leading-snug mave">Tuition Related Information</p>

                <hr className="h-px my-4 mb-12 bg-slate-50 border-2 border-[#FACF0E] dark:bg-slate-50 w-2/4 mx-auto" />



                <div className="w-full mt-6 pb-10 ml-0 relative">
                    <form onSubmit={handleSubmit(onSubmit)} className="">

                        <div className="flex gap-5 mb-5">
                            <div className="w-2/4">
                                <p className="bg-white pr-2 pl-2 -mt-1.5 ml-2 font-medium text-gray-600 absolute z-10">Preferable Categories
                                    <span className="text-red-600 px-1">*</span>
                                </p>
                                {/* dropdown */}
                                <Dropdown itemArray={itemArrDropdownCategories} placeholder='Select...'></Dropdown>
                                {/* dropdown */}
                            </div>
                            {/* <div className="relative top-0 w-2/4 ">
                                <p className="bg-white px-2 -mt-3 ml-2 font-medium text-gray-600 absolute">
                                    Preferable Categories <span className="text-red-600 px-1">*</span>
                                </p>
                                <input type="text"  {...register("name", { required: true })} name="name" placeholder="name" className="border placeholder-gray-400 focus:outline-none   focus:border-black w-full py-3.5 pr-4 pl-4 mt-2 ml-0 text-base block bg-white border-gray-300" />
                                {errors.name && <span className="text-red-600 px-1">Name is required</span>}
                            </div> */}
                            <div className="w-2/4">
                                <p className="bg-white pr-2 pl-2 -mt-1.5 ml-2 font-medium text-gray-600 absolute z-10">Preferable Classes
                                    <span className="text-red-600 px-1">*</span>
                                </p>
                                {/* dropdown */}
                                <Dropdown itemArray={itemArrDropdownCategories} placeholder='Select...'></Dropdown>
                                {/* dropdown */}
                            </div>
                        </div>

                        {/* email & mobile */}
                        <div className="flex gap-5 mb-5">
                            <div className="w-2/4">
                                <p className="bg-white pr-2 pl-2 -mt-1.5 ml-2 font-medium text-gray-600 absolute z-10">Preferable Subjects
                                    <span className="text-red-600 px-1">*</span>
                                </p>
                                {/* dropdown */}
                                <Dropdown itemArray={itemArrDropdownCategories} placeholder='Select...'></Dropdown>
                                {/* dropdown */}
                            </div>
                            <div className="w-2/4">
                                <p className="bg-white pr-2 pl-2 -mt-1.5 ml-2 font-medium text-gray-600 absolute z-10">Place of Tutoring
                                    <span className="text-red-600 px-1">*</span>
                                </p>
                                {/* dropdown */}
                                <Dropdown itemArray={itemArrDropdownCategories} placeholder='Select...'></Dropdown>
                                {/* dropdown */}
                            </div>
                        </div>


                        <div className="flex gap-5 mb-5">
                            <div className="w-2/4">
                                <p className="bg-white pr-2 pl-2 -mt-1.5 ml-2 font-medium text-gray-600 absolute z-10">Preferable Subjects
                                    <span className="text-red-600 px-1">*</span>
                                </p>
                                <Dropdown itemArray={itemArrDropdownCategories} placeholder='Select...'></Dropdown>
                            </div>
                            <div className="w-2/4">
                                <p className="bg-white pr-2 pl-2 -mt-1.5 ml-2 font-medium text-gray-600 absolute z-10">Place of Tutoring
                                </p>
                                <Dropdown itemArray={itemArrDropdownCategories} placeholder='Select...'></Dropdown>
                                {/* dropdown */}
                            </div>
                        </div>


                        <div className="flex gap-5 mb-5">
                            <div className="w-2/4">
                                <p className="bg-white pr-2 pl-2 -mt-1.5 ml-2 font-medium text-gray-600 absolute z-10">Preferable Subjects
                                    <span className="text-red-600 px-1">*</span>
                                </p>
                                {/* dropdown */}
                                <Dropdown itemArray={itemArrDropdownCategories} placeholder='Select...'></Dropdown>
                                {/* dropdown */}
                            </div>
                            <div className="w-2/4">
                                <p className="bg-white pr-2 pl-2 -mt-1.5 ml-2 font-medium text-gray-600 absolute z-10">Place of Tutoring
                                </p>

                                {/* dropdown */}
                                <Dropdown itemArray={itemArrDropdownCategories} placeholder='Select...'></Dropdown>
                                {/* dropdown */}
                            </div>
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
                            {
                                errors.checkbox?.type === 'required' && <p className="text-red-600 px-1">You need to agree terms and conditions before proceed</p>
                            }
                        </div>


                        <div className="relative">
                            <input type="submit"
                                className="w-full inline-block py-3 pr-5  pl-5 text-xl font-medium text-center hover:text-black
                                                 bg-[#1e326e] hover:bg-yellow-200 text-white border border-[#1e326e]
                                                  transition duration-300  hover:cursor-pointer ease "
                                value="Sign Up" />

                        </div>
                    </form>


                </div>
            </div>


        </div>
    );
};

export default TuitionForm;