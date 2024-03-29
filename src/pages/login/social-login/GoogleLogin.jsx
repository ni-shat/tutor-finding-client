import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";


const GoogleLogin = ({ modalCheckboxRef }) => {

    const { googleSignIn, user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/dashboard/userhome";
    console.log(from)

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email, role: "tutor", userImage: loggedInUser.photoURL, phone: loggedInUser.phoneNumber }
                console.log(saveUser)

                fetch(`http://localhost:5000/users?email=${loggedInUser.email}`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        Swal.fire({
                            position: 'top-middle',
                            icon: 'success',
                            title: 'User Login successful.',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        // closeModal();
                        navigate(from, { replace: true });
                        modalCheckboxRef.current.checked = false;

                    })
            })
            .catch(err => console.log(err))
    }

    return (
        <li onClick={handleGoogleSignIn} className="px-2 w-full">
            <Link className="
                               flex
                               h-11
                               items-center
                               justify-center
                               rounded-md
                               bg-[#D64937]
                               hover:bg-opacity-90
                               ">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M17.8477 8.17132H9.29628V10.643H15.4342C15.1065 14.0743 12.2461 15.5574 9.47506 15.5574C5.95916 15.5574 2.8306 12.8821 2.8306 9.01461C2.8306 5.29251 5.81018 2.47185 9.47506 2.47185C12.2759 2.47185 13.9742 4.24567 13.9742 4.24567L15.7024 2.47185C15.7024 2.47185 13.3783 0.000145544 9.35587 0.000145544C4.05223 -0.0289334 0 4.30383 0 8.98553C0 13.5218 3.81386 18 9.44526 18C14.4212 18 17.9967 14.7141 17.9967 9.79974C18.0264 8.78198 17.8477 8.17132 17.8477 8.17132Z"
                        fill="white" />
                </svg>
            </Link>
        </li>
    );
};

export default GoogleLogin;