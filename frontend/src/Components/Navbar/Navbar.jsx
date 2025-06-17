import React from 'react'
import './Navbar.css'
import { Bounce, toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router'
import { FaUserAlt, FaUsers } from 'react-icons/fa'
import { AiOutlineLogout } from "react-icons/ai"
import { useSelector } from 'react-redux'

const Navbar = () => {

    // ======== getting data from redux
    const loginUserData = useSelector((state) => state.users.value)

    // ======== naviagte part
    const navigate = useNavigate()

    // ======== handle log out part
    const handleLogout=()=>{
        localStorage.removeItem("loginUser")
        navigate("/")

        // ----------- toast massage for log out 
        toast.error(`Loged out`, {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce
          })
    }

    return (
        <>
            <nav>
                <div className="container">
                    <ul className="navCol">
                        <h1><span className='text-[#000]'>Welcome</span> {loginUserData?.name} 🙂</h1>
                        <ul className='navItems'>
                            <Link to={"/myprofile"} className='hover:text-blue-600'><FaUserAlt /> Profile</Link>
                            <Link to={"/myprofile/allUsers"} className='hover:text-green-600'><FaUsers /> All Users</Link>
                            <button onClick={handleLogout} className='hover:text-red-600'><AiOutlineLogout className='-rotate-90'/>Log Out</button>
                        </ul>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
