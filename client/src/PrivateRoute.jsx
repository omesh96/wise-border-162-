import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    let admin =localStorage.getItem("adminemail") || "";
    console.log(admin);
    if(admin){
        return children
    }
    else{
       return <Navigate to={'/adminregister'}  />
    }
}

export default PrivateRoute