import e from '../../../assets/e1.png'
import icon from '../../../assets/icon.png'

const Navbar3 = () => {
    return (
        <div className='top-0  absolute pt-2 w-fit flex justify-first gap-1 items-center  '>
            <img className=' w-[15%] h-fit  ' src={icon} alt="" />
            {/* <img className=' w-[17%] mt-1.5 h-fit' src={e} alt="" /> */}
            <h3 className='text-white text-2xl font-bold'><span className='text-[#FACF0E]'>E</span>-Tutor</h3>


            
        </div>
    );
};

export default Navbar3;