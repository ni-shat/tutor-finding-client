import Main from "../layout/Main";
import BecomeATutor from "../pages/become-a-tutor/BecomeATutor";
import Home from "../pages/home/home/Home";



import {
    createBrowserRouter
  } from "react-router-dom";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import Dashboard from "../layout/Dashboard";
import PrivateRoute from "./PrivateRoute";
import UserHome from "../pages/dashboard/user-home/UserHome";
import TeacherProfile from "../pages/dashboard/tutor/TeacherProfile/TeacherProfile";
  


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'become-a-tutor',
                element: <BecomeATutor></BecomeATutor>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'login',
                element: <Login></Login>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'userhome',
                element:  <PrivateRoute><UserHome></UserHome></PrivateRoute>
            },
            {
                path: 'teacher-profile',
                element:  <PrivateRoute><TeacherProfile></TeacherProfile></PrivateRoute>
            },
        ]
    }
]);


export default router