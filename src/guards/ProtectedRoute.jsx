import { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { toast } from 'react-toastify';

const ProtectedRoute = () => {
    const userHaveToken = localStorage.getItem('jwt');
    
    useEffect(() => {
        if(!userHaveToken) {
            toast("login first")
        }
    },[]);
    console.log("protected");
    return (
        userHaveToken ? <Outlet />  : <Navigate to="/login" />
    )
}
export default ProtectedRoute