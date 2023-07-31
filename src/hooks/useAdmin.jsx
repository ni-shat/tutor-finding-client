import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
// import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const { user, loading } = useContext(AuthContext);
    // const [axiosSecure] = useAxiosSecure();
    console.log(user.email)

    if (loading) {
        <p>loading...</p>
    }

    if (!user && !loading) {
        const isAdmin = false
        return [isAdmin];
    }

    // use axios secure with react query
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data: isAdmin = false, isLoading: isAdminLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        // enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users/admin/${user?.email}`);
            // console.log("is admin response ", res)
            // console.log(res.data.admin)
            return res.json();
        }
    })
    return [isAdmin, isAdminLoading]




    /**const usePopularClasses = () => {

    const {data: popularClasses = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['popularClasses'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/popular-classes');
            return res.json();
        }
    })

    return [popularClasses, loading, refetch]
} */
}
export default useAdmin;