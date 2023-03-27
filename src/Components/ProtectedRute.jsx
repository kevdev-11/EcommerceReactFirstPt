import React from 'react';
import { Outlet, Navigate } from 'react-router-dom'; 
const ProtectedRute = () => {

    const token = localStorage.getItem("token")

        if(token===true){
            return <Outlet />
        } else { 
            return <Navigate to='/login' />
        }               

};

export default ProtectedRute;