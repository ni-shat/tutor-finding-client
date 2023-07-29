import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import yDot from './yellow-dots-login.svg'
import gDot from './green-dots-login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { BeatLoader } from 'react-spinners';
import GoogleLogin from './social-login/GoogleLogin';
import FacebookLogin from './social-login/FacebookLogin';

const Login = ({ closeModal, openModal }) => {

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState("");
  const { signIn, updateUserProfile, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  console.log(location.state)

  const from = location.state?.from?.pathname || "/";

  const modalCheckboxRef = useRef(null);


  const onSubmit = data => {

    // setIsLoading(true);
    console.log(data)
    signIn(data.email, data.password)
      .then(result => {
        const user = result.user;
        console.log(user);
        reset();
        setIsLoading(false);
        Swal.fire({
          position: 'top-middle',
          icon: 'success',
          title: 'User Login successful.',
          showConfirmButton: false,
          timer: 1500
        });
        // closeModal();
        modalCheckboxRef.current.checked = false;
        navigate(from, { replace: true });
      })
      .catch(error => {
        setIsLoading(false); // Set loading back to false if there's an error during login
        console.log(error.message);
        const updatedErrorMessage = error.message.replace("Firebase: ", "")
        setError(updatedErrorMessage)
      });
  };

  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const resetForm = () => {
    setTimeout(() => {
      reset();
      setError(false);
      setIsLoading(false);
    }, 1000); // 1 second delay
  };


  return (
    <div >

      <input type="checkbox" id="my-modal-3" className="modal-toggle" ref={modalCheckboxRef} />
      <div className="modal p-0">
        <div className="modal-box relative max-h-max max-w-max h-auto p-1 m-0">
          {/* <!-- contents --> */}
          <div className="flex flex-wrap">
            <div className="w-full">
              <div className="
                      w-[525px]
                      mx-auto
                      
                      bg-white
                      rounded-lg
                      relative
                      overflow-hidden
                      py-16
                      px-10
                      sm:px-12
                      md:px-[60px]
                      ">
                <label htmlFor="my-modal-3"
                  onClick={resetForm}
                  className="btn btn-sm btn-circle bg-[#1e326e] border-0 absolute left-0 top-0 z-10 text-white">✕
                </label>
                <div className="mb-10 -mt-1 md:mb-14 text-center w-3/5 mx-auto">
                  <a href="javascript:void(0)" className="inline-block w-full mx-auto">
                    <img src="logo-logo.png" alt="logo" />
                  </a>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-6">
                    <input type="text" {...register("email", { required: true })} placeholder="Email" className="
                               w-full
                               rounded-md
                               border
                               bordder-[#E9EDF4]
                               py-3
                               px-5
                               bg-white
                               text-black font-normal
                               placeholder-[#ACB6BE]
                               outline-none
                               focus-visible:shadow-none
                               focus:border-teal-600
                               " />
                    {errors.email && <span className="text-red-600 font-normal">Email is required</span>}
                  </div>
                  <div className="mb-6 relative">
                    <input type={passwordVisible ? 'text' : 'password'} {...register("password", { required: true })} placeholder="Password" className="
                               w-full
                               rounded-md
                               border
                               bordder-[#E9EDF4]
                               py-3
                               px-5
                               bg-[#FCFDFE]
                               text-black font-normal
                               placeholder-[#ACB6BE]
                               outline-none
                               focus-visible:shadow-none
                               focus:border-[#1e326e]
                               " />
                    <FaEye onClick={togglePasswordVisibility} className={`${passwordVisible ? 'absolute' : 'hidden'} absolute top-2/4 -translate-y-2 right-4 text-black hover:cursor-pointer`} />
                    <FaEyeSlash onClick={togglePasswordVisibility} className={`${passwordVisible ? 'hidden' : 'absolute'} top-2/4 -translate-y-2 right-4 text-black hover:cursor-pointer`} />
                    {errors.password && <span className="text-red-600 font-normal ">Password is required</span>}
                  </div>
                  <div className="mb-10 relative">
                    <input type="submit" value={isLoading ? "Signing..." : "Sign in"} disabled={isLoading} className="
                               w-full disabled:bg-opacity-40 
                               bg-[#1e326e] rounded-md
                               border bordder-primary
                               hover:cursor-pointer hover:bg-opacity-40
                               transition
                               py-3
                               px-5"
                    />
                    {
                      isLoading && <BeatLoader className='absolute top-2/4 -translate-y-2.5 right-20 ' color="#FFFFFF" />
                    }
                    {isError ? <p className="text-red-600 font-normal mt-1 -mb-3 pl-1">{isError}</p> : <></>}
                  </div>
                </form>
                <p className="text-base mb-6 text-gray-500 font-normal text-center">Connect With</p>
                <ul className="flex justify-between -mx-2 mb-12">
                  <FacebookLogin modalCheckboxRef={modalCheckboxRef}></FacebookLogin>
                  <li className="px-2 w-full">
                    <a href="javascript:void(0)" className="
                               flex
                               h-11
                               items-center
                               justify-center
                               rounded-md
                               bg-[#1C9CEA]
                               hover:bg-opacity-90
                               ">
                      <svg width="22" height="16" viewBox="0 0 22 16" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M19.5516 2.75538L20.9 1.25245C21.2903 0.845401 21.3968 0.53229 21.4323 0.375734C20.3677 0.939335 19.3742 1.1272 18.7355 1.1272H18.4871L18.3452 1.00196C17.4935 0.344423 16.429 0 15.2935 0C12.8097 0 10.8581 1.81605 10.8581 3.91389C10.8581 4.03914 10.8581 4.22701 10.8935 4.35225L11 4.97847L10.2548 4.94716C5.7129 4.82192 1.9871 1.37769 1.38387 0.782779C0.390323 2.34834 0.958064 3.85127 1.56129 4.79061L2.76774 6.54403L0.851613 5.6047C0.887097 6.91977 1.45484 7.95303 2.55484 8.7045L3.5129 9.33072L2.55484 9.67515C3.15806 11.272 4.50645 11.9296 5.5 12.18L6.8129 12.4932L5.57097 13.2446C3.58387 14.4971 1.1 14.4031 0 14.3092C2.23548 15.6869 4.89677 16 6.74194 16C8.12581 16 9.15484 15.8748 9.40322 15.7808C19.3387 13.7143 19.8 5.8865 19.8 4.32094V4.10176L20.0129 3.97652C21.2194 2.97456 21.7161 2.44227 22 2.12916C21.8935 2.16047 21.7516 2.22309 21.6097 2.2544L19.5516 2.75538Z"
                          fill="white" />
                      </svg>
                    </a>
                  </li>
                 <GoogleLogin modalCheckboxRef={modalCheckboxRef}></GoogleLogin>
                </ul>
                <Link className="
                         text-base
                         
                         mb-2  flex justify-center
                         text-gray-500 font-normal 
                         hover:underline hover:text-[#1e326e]
                         ">
                  Forget Password?
                </Link>
                <p className="text-base text-gray-500 font-normal text-center">
                  Not a member yet? <Link to='/register' className="text-[#1e326e] font-semibold hover:underline"> Sign Up
                  </Link>
                </p>
                <div>
                  <span className="absolute top-1 right-1">
                    <img src={yDot} alt="" />
                  </span>
                  <span className="absolute left-1 bottom-1">
                    <img src={gDot} alt="" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;