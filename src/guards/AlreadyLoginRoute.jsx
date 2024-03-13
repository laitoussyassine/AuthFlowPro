import { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { toast } from 'react-toastify';

const AlreadyLoginRoute = () => {
    const userHaveToken = localStorage.getItem('jwt');
    useEffect(() => {
        if (userHaveToken) {
            toast.warning("Logout First");
        }
    }, [])
    console.log("protected");
    return (
        userHaveToken ?  <Navigate to="/profile" /> : <Outlet />
    )
}
export default AlreadyLoginRoute