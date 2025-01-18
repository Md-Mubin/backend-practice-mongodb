import React from 'react'
import { Navigate, Outlet } from 'react-router'
import Navbar from '../Components/Navbar/Navbar'
import { useSelector } from 'react-redux'

const LayoutTwo = () => {

    const user = useSelector((state)=>state.users.value)

    if(!user){
        return <Navigate to={"/"} replace/>
    }
    
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default LayoutTwo