import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const Protects = ({auth , children}) => {
  
    if(auth === false){
        return <Navigate to="/login" replace></Navigate>
    }

    return children ? children : <Outlet></Outlet>
}

export default Protects
