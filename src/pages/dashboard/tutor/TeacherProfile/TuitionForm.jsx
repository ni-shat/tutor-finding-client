import React, { useEffect } from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../../providers/AuthProvider';
import { useState } from 'react';
import { FaAngleDown, FaArrowCircleRight } from 'react-icons/fa';
import Dropdown from '../../../../components/Dropdown';
import { useRef } from 'react';




const TuitionForm = () => {

    const [Categories, SetCategories] = useState([]);
    const [Subjects, SetSubjects] = useState([]);
    const [Classes, SetClasses] = useState({});
    const [City, SetCity] = useState([]);
    const [Location, SetLocation] = useState([]);
    const [PreferredLocation, SetPreferredLocation] = useState([]);
    const [Options, SetOptions] = useState([]);

    const { register, handleSubmit, reset, formState: { errors }, watch } = useForm();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const [allData, setAllData] = useState({})

    useEffect(() => {
        fetch('/TeacherAllClasses.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                SetClasses(data)
            })
    }, [])

    useEffect(() => {
        console.log("allData", allData);

        // allData.categories
        if (Object.keys(allData).length != 0) {
            // console.log("avai", Object.keys(allData).length)
        }
    }, [allData])


    const onSubmit = data => {

        console.log(allData)

        const saveTuitionInfo = { ...allData, email: user?.email };
        console.log(saveTuitionInfo)

        // after updating post data into DB
        fetch(`http://localhost:5000/profile/teacher/${user?.email}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(saveTuitionInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    reset();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Tuition Information are added!',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    // navigate('/');
                }
            })
        // end posting data into DB




    };

    const inputRef = useRef(null);

    const itemArrDropdownCategories = {
        "categories": ["Bangla Medium", "English Medium", "English Version", "Uni Help", "Language Learning", "Madrasha Medium", "IELTS Preparation", "Test Preparation"]
    };

    const subjectss =
    {
        "English Version": ["Pre-Schooling", " Play", "Nursery", "KG", "Class 1", "Class 2", "Class 3", "Class 4", "Class 5", "Class 6", "Class 7", "Class 8", "Class 9", "Class 10", "HSC 1st year", "HSC 2nd year"],

        "bangla Medium": ["Pre-Schooling", " Play", "Nursery", "KG", "Class 1", "Class 2", "Class 3", "Class 4", "Class 5", "Class 6", "Class 7", "Class 8", "Class 9", "Class 10", "HSC 1st year", "HSC 2nd year"],

        "English Medium": ["Pre-Schooling", " Play", "Nursery", "KG", "Standard 1", "Standard 2", "Standard 3", "Standard 4", "Standard 5", "Standard 6", "Standard 7", "Standard 8", "Standard 9", "O level", "A Level(AS)", "A Level(A2)"],

        "Admission Test": ["Public University Admission Test", "Private University Admission Test", "Medical College Admission Test", "Engineering University Admission Test", "School Admission Test"],

        "Test Preparation": ["Bank Job Preparation", "IELTS", "GED", "SAT", "GRE", "GMAT", "TOEFL"],

        "Language Learning": ["English", "Arabic", "French", "German"],

        "Uni Help": ["BBA", "MBBS"]

    }



    return (
        <div className="mt-0 ml-10 lg:ml-0 relative lg:pb-12 lg:mt-8 w-10/12 z-0 lg:w-[100%]">

            <div className="flex rounded-xl shadow-2xl shadow-gray-400 flex-col items-start justify-start pt-10 pr-10 pb-3.5 pl-10 bg-white border  relative z-10">

                <p className="w-full text-4xl font-medium text-center leading-snug mave">Tuition Related Information</p>

                <hr className="h-px my-4 mb-12 bg-slate-50 border-2 border-[#FACF0E] dark:bg-slate-50 w-2/4 mx-auto" />



                <div className="w-full mt-6 pb-10 ml-0 relative">
                    <form onSubmit={handleSubmit(onSubmit)} className="">

                        <div className="flex gap-5 mb-5">
                            <div className="w-full">
                                <p className="bg-white pr-2 pl-2 -mt-1.5 ml-2 font-medium text-gray-600 absolute z-10">Preferable Categories
                                    <span className="text-red-600 px-1">*</span>
                                </p>
                                {/* dropdown */}
                                <Dropdown inputRef={inputRef} allData={allData} setAllData={setAllData} propertyName={'categories'}
                                    itemObject={itemArrDropdownCategories} placeholder='Select...'></Dropdown>
                                {/* dropdown */}
                            </div>
                            <div className="w-full">
                                <p className="bg-white pr-2 pl-2 -mt-1.5 ml-2 font-medium text-gray-600 absolute z-10">Preferable Classes
                                    <span className="text-red-600 px-1">*</span>
                                </p>
                                {/* dropdown */}
                                <Dropdown allData={allData} setAllData={setAllData} propertyName={'classes'} itemObject={Classes} placeholder='Select...'></Dropdown>
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
                                <Dropdown allData={allData} setAllData={setAllData} propertyName={'subjects'} itemObject={subjectss} placeholder='Select...'></Dropdown>
                                {/* dropdown */}
                            </div>
                            <div className="w-2/4">
                                <p className="bg-white pr-2 pl-2 -mt-1.5 ml-2 font-medium text-gray-600 absolute z-10">City
                                    <span className="text-red-600 px-1">*</span>
                                </p>
                                {/* dropdown */}
                                <Dropdown allData={allData} setAllData={setAllData} propertyName={'city'} itemObject={itemArrDropdownCategories} placeholder='Select...'></Dropdown>
                                {/* dropdown */}
                            </div>
                        </div>


                        <div className="flex gap-5 mb-5">
                            <div className="w-2/4">
                                <p className="bg-white pr-2 pl-2 -mt-1.5 ml-2 font-medium text-gray-600 absolute z-10">Your Location
                                </p>
                                <Dropdown allData={allData} setAllData={setAllData} propertyName={'location'} itemObject={itemArrDropdownCategories} placeholder='Select...'></Dropdown>
                                {/* dropdown */}
                            </div>
                            <div className="w-2/4">
                                <p className="bg-white pr-2 pl-2 -mt-1.5 ml-2 font-medium text-gray-600 absolute z-10">Preferred Location
                                    <span className="text-red-600 px-1">*</span>
                                </p>
                                <Dropdown allData={allData} setAllData={setAllData} propertyName={'preferredLocation'} itemObject={itemArrDropdownCategories} placeholder='Select...'></Dropdown>
                            </div>
                        </div>


                        <div className="flex gap-5 mb-5">
                            <div className="w-full">
                                <p className="bg-white pr-2 pl-2 -mt-1.5 ml-2 font-medium text-gray-600 absolute z-10">Tutoring Options
                                </p>
                                <Dropdown allData={allData} setAllData={setAllData} propertyName={'options'}
                                    itemObject={
                                        { "options": ["Student Home", "My Home", "Online"] }
                                    }
                                    placeholder='Select...'></Dropdown>
                            </div>
                        </div>


                        <div className="relative">
                            {/* <input type="submit"
                                className="w-full inline-block py-3 pr-5  pl-5 text-xl font-medium text-center hover:text-black
                                                 bg-[#1e326e] hover:bg-yellow-200 text-white border border-[#1e326e]
                                                  transition duration-300  hover:cursor-pointer ease "
                                value="Next" /> */}
                            <button className='w-full flex justify-center items-center gap-4 py-3 pr-5  pl-5 text-xl font-medium text-center hover:text-black
                                                 bg-[#1e326e] hover:bg-yellow-200 text-white border border-[#1e326e]
                                                  transition duration-300  hover:cursor-pointer ease'>Next <FaArrowCircleRight className='text-sm mt-1' /></button>

                            {/* <FaArrowCircleRight className='absolute text-white left-2/4 top-2/4 translate-x-10 -translate-y-2'/> */}
                        </div>
                    </form>


                </div>
            </div>


        </div>
    );
};

export default TuitionForm;