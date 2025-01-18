import React from 'react'
import './ProfileCompo.css'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { useNavigate } from 'react-router'

const ProfileCompo = () => {

    // ============ login users datas
    const loginUserData = useSelector((state) => state.users.value)

    // ============ naviagte 
    const navigate = useNavigate()
    
    // ============ delete id/profile part 
    const handleDeleteId=()=>{
        axios.post("http://localhost:4000/myprofile", {id : loginUserData._id})
        localStorage.removeItem("loginUser")
        navigate("/")
    }

    return (
        <>
            <section className='profileSection'>
                <div className="container">
                    <ul className='profileRow'>
                        <img src="/user_image.png" alt="user_image" className='w-[200px] ' />
                        <ul className='userInfoRow'>
                            <li>
                                <span>
                                    Name:
                                </span>
                                {loginUserData?.name}
                            </li>
                            <li>
                                <span>
                                    Age:
                                </span>
                                {loginUserData?.age}
                            </li>
                            <li>
                                <span>
                                    Email:
                                </span>
                                {loginUserData?.email}
                            </li>
                        </ul>
                        <button onClick={handleDeleteId}>Delete Id</button>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default ProfileCompo