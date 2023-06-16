
import bg from '../../../assets/bg.jpg'
import banner from '../../../assets/banner-2.jpg'
import kid from '../../../assets/kid1.png';
import wave from '../../../assets/Wave (7).svg';
import wave1 from '../../../assets/Stacked Wave (1).svg';
import font from '../../../assets/nn.png';
import font2 from '../../../assets/for.png';
import { FaArrowRight } from 'react-icons/fa';
import Navbar from '../../shared/navbar/Navbar';
import Navbar2 from '../../shared/navbar/Navbar2';

// tutor-.png


const Banner = () => {
    return (
        <div>
            {/* <div className='w-full h-full bg-opacity-30'>
                <img className='w-full h-full object-cover' src={banner} alt="" />
            </div> */}
            
            {/* <Navbar></Navbar> */}
            <div className='bg-white relative'>
                <div className="hero h-[750px] mt-0 bg-[url('/kid.jpg')]">
                    <div className="hero-overlay bg-black bg-opacity-10"></div>
                    {/* <Navbar2></Navbar2> */}
                    <div className="justify-start  ml-20 w-[90%] text-white  ">
                        {/* <div className="flex justify-between bg-black bg-opacity-60 w-fit items-center py-10 pb-10  border-8 border-teal-700 rounded-xl px-20 ml-8"> */}

                        <Navbar2></Navbar2>
                        <h1 className=" leading-[50px] mt-14 uppercase text-4xl font-extrabold">Looking 
                        {/* for a  */}
                         <img className=' ml-3  inline ' src={font2} alt="" />  
                        
                        <span className='text-8xl flex items-center'>
                            <img className='mt  w-[30%] inline' src={font} alt="" />
                            {/* <span className='mt-2  mx-0 text-9xl font-bold ml-3 '>?</span> */}
                        </span></h1>
                        {/* <h1 className=" leading-[100px] mt-5 text-3xl font-medium ">"The <span className='text-[#FACF0E]'>best guideline</span> for your kids"</h1> */}

                        <h1 className=" leading-[100px] mt-2 text-3xl font-medium ">"Find Your Personal <span className='text-[#FACF0E]'>Tutoring Hero</span>"</h1>

                        <button className='text-4xl rounded-full py-5 uppercase px-20 border-8 mt-4 shadow-black  shadow-2xl text-teal-800 border-[#FACF0E] font-extrabold bg-white mx-1 flex items-center gap-3'>Hire now <FaArrowRight className='mt-0.5 text-teal-800' /> </button>

                        
                     
                        
                        
                        
                        


                        {/* <h1 className=" leading-[50px] mt-16 text-5xl font-extrabold">Looking for a <br /> <span className='text-9xl flex items-center'>
                            <img className='mt-6' src={font} alt="" />
                            <span className='mt- mx-0 text-9xl font-bold '></span>
                        </span></h1>
                        <h1 className=" leading-[100px] mt-3 text-3xl font-bold">"The <span className='text-[#FACF0E]'>best guideline</span> for your kids"</h1>
                        <button className='text-4xl rounded-full py-5 uppercase px-20 border-8 mt-4 shadow-black  shadow-2xl text-teal-800 border-[#FACF0E] font-extrabold bg-white mx-1 flex items-center gap-3'>Hire now <FaArrowRight className='mt-0.5 text-teal-800' /> </button> */}


                        
                    </div>
                </div>
                {/* <div className='relative -top-[550px] left-[900px]'><img src={kid} alt="" /></div> */}
                {/* <div className='relative -top-[700px] '><img src={wave} alt="" /></div> */}

            </div>


        </div>
    );
};

export default Banner;