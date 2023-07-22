
import bg from '../../../assets/bg.jpg'
import banner from '../../../assets/banner-2.jpg'
import kid from '../../../assets/kid1.png';
import wave from '../../../assets/Wave (7).svg';
import wave1 from '../../../assets/Stacked Wave (1).svg';
import font from '../../../assets/n.png';
import font2 from '../../../assets/for.png';
import { FaAngleRight, FaArrowRight } from 'react-icons/fa';
import Navbar from '../../shared/navbar/Navbar';
import Navbar2 from '../../shared/navbar/Navbar2';
import Navbar3 from '../../shared/navbar/Navbar3';
import '../../../index.css';



import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper.min.css';


import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";
import "swiper/css/effect-fade";
import { Mousewheel, EffectFade, Autoplay, Navigation, Pagination } from "swiper";

// aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import { Fade, Slide } from "react-awesome-reveal";



const Banner = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    const handleSlideChange = () => {
        // console.log('hi')
        // AOS.refresh(); // Refresh AOS to trigger animations on slide change
        // AOS.init();
    };


    return (
        // <div>

        <div className='h-[500px]'>
            <Swiper
                // direction={"vertical"}
                // spaceBetween={30}
                effect={"fade"}
                centeredSlides={true}
                slidesPerView={1}
                spaceBetween={30}
                // freeMode={true}
                mousewheel={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                // onSlideChangeTransitionEnd={handleSlideChange}
                // navigation={true}
                modules={[Autoplay, Pagination, Navigation, EffectFade, Mousewheel]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='bg-white h-[650px] w-full relative'>
                        <div className="hero h-full mt-0 bg-[url('/b2.jpg')]">
                            <div className="hero-overlay bg-black bg-opacity-30"></div>
                            {/* <Navbar2></Navbar2> */}
                            <div className="justify-start   ml-0 w-[100%] text-white  ">
                                {/* <div
                                className="flex justify-between bg-black bg-opacity-60 w-fit items-center py-10 pb-10  border-8 border-teal-700 rounded-xl px-20 ml-8">
                                */}

                                <div className='bg-[#3e4456] bg-opacity-80 w-2/4 pl-20 h-[650px]'>
                                    <Navbar3></Navbar3>
                                    {/* <div className='flex gap-6 mb-4 text-base items-center pt-48 text-primary'>
                                        <div className='h-6 w-6  animate-pulse overflow-hidden circle rounded-full bg-primary'></div>
                                        <h3 className='font-medium '>Private & Online Tutor</h3>
                                    </div> */}
                                    <div className='pt-48 flex'>
                                        <div className='border-0 pb-2  border-[#FACF0E] border-l-8 mt-1 mb-2'></div>
                                        <Slide>
                                        <h1 className="text-animation px-8 roboto uppercase leading-[60px] mon text-5xl font-  ">Looking
                                            For a
                                            <br /> Tutor?

                                            {/* <span className='text-8xl flex items-center'>
                                                <img className='-mt-1 ml-0.5  w-[45%] inline' src={font} alt="" />
                                            </span> */}
                                            {/* dancing script, Zen Tokyo Zoo */}
                                        </h1>
                                        </Slide>
                                    </div>

                                    <div className='flex gap-3  mb-14 mt-6 text-base  '>
                                        {/* <div className='h-6 w-6  animate-pulse overflow-hidden circle rounded-full bg-primary'>
                                       </div> */}
                                        {/* <Fade delay={1e3} cascade damping={1e-1}> */}
                                        <div>
                                            <h1 className="text-animation animate__animated animate__fadeInLeft text-base font-medium roboto-normal">"Discover  <span className='text-primary'>Expert Private Tutors </span>in Your Area and Ace Your Education"</h1>
                                        </div>
                                        {/* </Fade> */}

                                    </div>
                                    <button
                                        className='button-animation animate__animated animate__fadeInUpBig  text-base  rounded-none py-5 uppercase px-12 border-2 mt-4 shadow-black  shadow-2xl text-primary border-[#FACF0E]  font-bold roboto-semi bg-transparent mx-1 flex items-center gap-3'>Find
                                        Tutor now
                                        <FaAngleRight className='mt-0.5 ' />
                                    </button>

                                    {/* <button
                        className='text-2xl rounded-full py-6 uppercase px-14 border-4 mt-6 shadow-black  shadow-2xl text-cyan-900 border-white  font-extrabold bg-primary mx-1 flex items-center gap-3'>Find
                        Tutor now
                        <FaArrowRight className='mt-0.5 text-teal-800' />
                    </button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-white relative'>
                        <div className="hero h-[650px] mt-0 bg-[url('/bg-online.jpg')]">
                            <div className="hero-overlay bg-black bg-opacity-30"></div>
                            {/* <Navbar2></Navbar2> */}
                            <div className="justify-start   ml-0 w-[100%] text-white  ">
                                {/* <div
                className="flex justify-between bg-black bg-opacity-60 w-fit items-center py-10 pb-10  border-8 border-teal-700 rounded-xl px-20 ml-8">
                */}

                                <div className='bg-[#3e4456] bg-opacity-80 w-2/4 pl-20 h-[650px]'>
                                    <Navbar3></Navbar3>
                                    <div className='pt-48 flex'>
                                        <div className='border-0 pb-2  border-[#FACF0E] border-l-8 mt-1 mb-2'></div>
                                        {/* <Slide> */}
                                            <h1 className="text-animation Big px-8 roboto uppercase leading-[60px] mon text-5xl font-  ">
                                                Find the Right Online Tutor
                                            </h1>
                                        {/* </Slide> */}
                                    </div>

                                    <div className='flex gap-3  mb-14 mt-6 text-base  '>
                                        {/* <div className='h-6 w-6  animate-pulse overflow-hidden circle rounded-full bg-primary'>
                        </div> */}
                                        <div>
                                            <h1 className="text-animation text-base font-medium roboto-normal">"Connecting Students with  <span className='text-primary'>Skilled Online </span>Tutors"</h1>
                                        </div>
                                        {/*  "Find the Ideal Online Tutor for Academic Excellence" */}

                                    </div>

                                    {/* <h1 className=" leading-[100px] px-11 -mt-2 text-base font-medium ">"Discover <span
                            className='text-primary'>Private & Online </span>Expert Tutors and Ace Your Education"</h1>
                    */}

                                    <button
                                        className='button-animation text-base  rounded-none py-5 uppercase px-12 border-2 mt-4 shadow-black  shadow-2xl text-primary border-[#FACF0E]  font-bold roboto-semi bg-transparent mx-1 flex items-center gap-3'>Find
                                        Tutor now
                                        <FaAngleRight className='mt-0.5 ' />
                                    </button>

                                    {/* <button
                        className='text-2xl rounded-full py-6 uppercase px-14 border-4 mt-6 shadow-black  shadow-2xl text-cyan-900 border-white  font-extrabold bg-primary mx-1 flex items-center gap-3'>Find
                        Tutor now
                        <FaArrowRight className='mt-0.5 text-teal-800' />
                    </button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className='bg-white relative'>
                        <div className="hero h-[650px] mt-0 bg-[url('/b3.jpg')]">
                            <div className="hero-overlay bg-black bg-opacity-30"></div>
                            {/* <Navbar2></Navbar2> */}
                            <div className="justify-start   ml-0 w-[100%] text-white  ">
                                {/* <div
                className="flex justify-between bg-black bg-opacity-60 w-fit items-center py-10 pb-10  border-8 border-teal-700 rounded-xl px-20 ml-8">
                */}

                                <div className='bg-[#3e4456] bg-opacity-80 w-2/4 pl-20 h-[650px]'>
                                    <Navbar3></Navbar3>
                                    {/* <div className='flex gap-6 mb-4 text-base items-center pt-48 text-primary'>
                        <div className='h-6 w-6  animate-pulse overflow-hidden circle rounded-full bg-primary'></div>
                        <h3 className='font-medium '>Private & Online Tutor</h3>
                    </div> */}
                                    <div className='pt-48 flex'>
                                        <div className='border-0 pb-2  border-[#FACF0E] border-l-8 mt-1 mb-2'></div>
                                        <h1 className="text-animation px-8 roboto uppercase leading-[60px] mon text-5xl font-  ">
                                            One-on-One Tutoring
                                            {/* <br /> Tutor? */}

                                            {/* <span className='text-8xl flex items-center'>
                                <img className='-mt-1 ml-0.5  w-[45%] inline' src={font} alt="" />
                            </span> */}
                                            {/* dancing script, Zen Tokyo Zoo */}
                                        </h1>
                                    </div>

                                    <div className='flex gap-3  mb-14 mt-6 text-base  '>
                                        {/* <div className='h-6 w-6  animate-pulse overflow-hidden circle rounded-full bg-primary'>
                        </div> */}
                                        <div>
                                            <h1 className="text-animation text-base font-medium roboto-normal">"Empowering Students through <span className='text-primary'>Personalized</span> Education"</h1>
                                        </div>
                                        {/*  "Find the Ideal Online Tutor for Academic Excellence" */}

                                    </div>

                                    {/* <h1 className=" leading-[100px] px-11 -mt-2 text-base font-medium ">"Discover <span
                            className='text-primary'>Private & Online </span>Expert Tutors and Ace Your Education"</h1>
                    */}

                                    <button
                                        className='button-animation text-base  rounded-none py-5 uppercase px-12 border-2 mt-4 shadow-black  shadow-2xl text-primary border-[#FACF0E]  font-bold roboto-semi bg-transparent mx-1 flex items-center gap-3'>Find
                                        Tutor now
                                        <FaAngleRight className='mt-0.5 ' />
                                    </button>

                                    {/* <button
                        className='text-2xl rounded-full py-6 uppercase px-14 border-4 mt-6 shadow-black  shadow-2xl text-cyan-900 border-white  font-extrabold bg-primary mx-1 flex items-center gap-3'>Find
                        Tutor now
                        <FaArrowRight className='mt-0.5 text-teal-800' />
                    </button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                {/* One-on-One Tutoring */}
                {/* "Discover the Power of One-on-One Tutoring" */}
                {/* Empowering Students through Personalized Education */}

            </Swiper>
        </div>


        // </div>
    );
};

export default Banner;



/**
 * background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,0,0,1) 0%, rgba(38,38,180,1) 43%, rgba(245,245,245,1) 100%);
 */