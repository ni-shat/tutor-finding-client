import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
// import useAxiosSecure from "./useAxiosSecure";

const useStudent = () => {
    const {user, loading} = useContext(AuthContext);
    // const [axiosSecure] = useAxiosSecure();
    
    const {data: isStudent = false, isLoading: isStudentLoading} = useQuery({
        queryKey: ['isStudent', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users/student/${user?.email}`);
            // console.log("is student response ", res)
            
            // return res.data.student;
            return res.json();
        }
    })
    return [isStudent, isStudentLoading]
}
export default useStudent;