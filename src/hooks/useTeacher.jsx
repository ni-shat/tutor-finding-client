import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
// import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../providers/AuthProvider";

const useTeacher = () => {
    const {user, loading} = useContext(AuthContext);
    // const [axiosSecure] = useAxiosSecure();

    // if(loading){
    //     <p>loading...</p>
    // }

    // if(!user && !loading) {
    //     const isInstructor = false
    //     return [isInstructor];
    // }

    const {data: isTeacher = false, isLoading: isTeacherLoading} = useQuery({
        queryKey: ['isTeacher', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users/teacher/${user?.email}`);
            // console.log("is teacher response ",res)
            return res.json();
        }
    })
    return [isTeacher, isTeacherLoading]
}
export default useTeacher;