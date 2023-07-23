import Main from "../layout/Main";
import BecomeATutor from "../pages/become-a-tutor/BecomeATutor";
import Home from "../pages/home/home/Home";



import {
    createBrowserRouter
  } from "react-router-dom";
  


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
            }
        ]
    },
]);


export default router