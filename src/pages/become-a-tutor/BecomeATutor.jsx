import apply_bg from '../../assets/apply-bg.jpg';
import { FaAngleRight } from "react-icons/fa";
import { Parallax } from 'react-parallax';
import { Link } from 'react-router-dom';
import useSubNav from '../../hooks/useSubNav';


const BecomeATutor = () => {

    const subNav = useSubNav('Become a Tutor');


    return (
        <div className=" relative  ">


            {subNav}

            {/* <header className=" bg-gray-100 ">
                <div className='w-[94%] py-4 text-xs roboto-normal-500 mx-auto flex justify-between'>
                    <div>
                        <p className='text-[#1e326e] uppercase'>Become a Tutor</p>
                    </div>
                    <div className="flex gap-2">
                        <p className='text-gray-400'>Home</p>
                        <p className='text-gray-700'>|</p>
                        <p className='text-gray-700'>Become a Tutor</p>
                    </div>
                </div>
            </header> */}



            {/* main section start */}
            <main className="relative pt-36">

                {/* Main Heading */}
                <section>
                    <div className="w-[85%] mx-auto">
                        <p className="text-gray-400 roboto-normal font-extralight py-1.5">Join Our Team of Educators!</p>
                        {/* maven-300 */}
                    </div>
                    <h3 className="text-4xl maven flex items-center gap-3  ">
                        <span className="text-xs roboto-normal"> -------------------------- </span><span className="text-[#1e326e] ">Become a </span> <span className="text-primary"> Tutor</span> <span className="text-[#1e326e] "> and Empower Minds</span>
                    </h3>
                </section>

                <div className="w-[85%] mx-auto py-20 text-gray-600 flex gap-7 justify-between robo">
                    <div className="w-[46%]">
                        <p>Are you passionate about sharing knowledge, inspiring students, and making a positive impact on young minds? Take the opportunity to become a tutor with our esteemed platform. </p>
                        <p className="py-4">Join our team of dedicated educators, and together, let's embark on a fulfilling journey of learning, growth, and meaningful connections. Whether you are an experienced educator or someone with a strong academic background and a passion for teaching, we welcome you to make a difference in the lives of eager learners. </p>
                        <p>Join us today and help shape a brighter tomorrow.</p>
                    </div>
                    <div className="w-[52%] robo">
                        <div>
                            <h2 className="text-[#1e326e] font-semibold pb-8">Skill Requirements</h2>
                        </div>
                        <div>
                            <ul className="list list-disc space-y-3 pl-4 ">
                                <li>Demonstrated knowledge and proficiency in the subject(s) you wish to tutor in.</li>
                                <li>Consistent availability and commitment to scheduled tutoring sessions.</li>
                                <li>Familiarity with online tutoring platforms and digital tools.</li>
                                <li>Building a positive and respectful relation with students to create a conducive learning environment.</li>
                                <li>Tailoring teaching style to suit individual needs.</li>
                                <li>Relevant academic qualifications or certifications may be required.</li>
                                <li>Prospective tutors may undergo pre-hiring assessment or one-class orientation before selectio</li>
                                <li>Willingness to undergo background checks for safety, especially when working with underage students.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Apply now section */}
                <section className="py-14 bg-slate-50 shadow-2xl shadow-black ">
                    <div>
                        <div className="w-[85%] mx-auto">
                            <p className="text-gray-400 roboto-normal font-extralight py-1.5">Find the Perfect Tutoring Job</p>
                            {/* maven-300 */}
                        </div>
                        <h3 className="text-4xl maven flex items-center gap-3  ">
                            <span className="text-xs roboto-normal"> -------------------------- </span><span className="text-[#1e326e] ">Apply </span> <span className="text-primary"> Now</span>
                            {/* <span className="text-[#1e326e] "> and Empower Minds</span> */}
                        </h3>
                    </div>

                    {/* main section of - apply section */}
                    <div className='py-14'>
                        <div className='relative w-[85%] mx-auto'>
                            <img className='object-cover w-full h-[555px]' src={apply_bg} alt="" />
                            <div className='absolute top-10 bg-white w-2/4 h-[480px] px-8 py-8'>

                                <div className=''>
                                    <p className="text-4xl maven flex items-center gap-3  ">
                                        <span className="text-[#1e326e] ">Start Your  </span> <span className="text-primary"> </span>
                                    </p>
                                    <p className="text-6xl maven flex items-center gap-3  ">
                                        <span className="text-[#1e326e] ">Tutoring Journey Today! </span> <span className="text-primary"> </span>
                                    </p>
                                </div>

                                <div className='py-10 text-gray-600 px-1'>
                                    <p className='text-s'>
                                        Ready to make a difference as a tutor on our platform? Click the button below to begin your journey with us. Join our mission to empower learners and shape a brighter future together!
                                    </p>
                                    {/* <p>Ready to make a difference as a tutor on our platform? Sign up today and receive a special welcome bonus as our way of appreciating your commitment to education! </p> */}
                                </div>

                                <div className='mx-auto w-fit pt-2.5 relative'>

                                    <button className='flex items-center gap-2 mave text-2xl rounded-full  pl-7 pr-4 py-3.5 font-extrabold shadow-2xl shadow-[#000000] bg-[#1e326e] text-white transition-all duration-500 z-10'><span>Apply Now</span><FaAngleRight className='mt-1.5' /></button>

                                    <Link to='/register'>
                                    <button className='flex items-center gap-x-2 mave text-2xl rounded-full bg-primary  pl-7 pr-4 py-3.5 text-white font-extrabold shadow-2xl shadow-[#000000] absolute top-2 
                                    hover:bg-black  transition-all duration-500 ease-in-out bg-gradient-to-r from-[#1e326e] to-[#7189d0] 
                                    '>
                                        {/* [#7189d0] */}
                                        <span>Apply Now</span>
                                        <span><FaAngleRight className='mt-1.5' /></span>
                                    </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* Start Your Tutoring Journey Today! */}
                    </div>
                </section>

                {/* Have question section */}
                <section className='my-24'>

                    <Parallax
                        blur={{ min: -15, max: 15 }}
                        bgImage="/hiring.jpg"
                        // bg-[url('/b.jpg')]
                        bgImageAlt="the dog"
                        strength={-200}
                    >
                        <div className='h-[500px] bg-[#1e326e] bg-opacity-40' >
                            <div className='w-[65%]  h-full mx-auto flex flex-col justify-center items-center text-white gap-4 text-center robo'>
                                <p className='font-medium text-2xl'>Call Us +8801711111111</p>
                                <h5 className='mave text-6xl  font-semibold '>Questions About Hiring?</h5>
                                <p className='font-extralight pt-3  text-base'>Contact our friendly support team at for any inquiries or assistance with the application process. Your information is safe with us. We respect your privacy and adhere to strict data protection guidelines. Please review our <Link className='underline'>Privacy Policy</Link> to understand how we collect, use, and safeguard your data.
                                </p>

                                <button className='mt-5 flex items-center gap-2 mave text-xl rounded-full bg-slate-50 bg-opacity-25 border-b-yellow-400 border-b-4 px-7 py-2.5 text-black font-extrabold shadow-2xl shadow-[#000000] w-fit
                                hover:bg-black hover:text-white transition-all duration-500 ease-in-out'>Contact Us
                                </button>
                            </div>
                        </div>
                    </Parallax>

                </section>


            </main>


            {/* w-[85%] mx-auto  */}
        </div>
    );
};

export default BecomeATutor;