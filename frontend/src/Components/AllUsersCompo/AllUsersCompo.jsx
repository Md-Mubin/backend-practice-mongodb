import React, { useEffect, useState } from 'react'
import './AllUsersCompo.css'
import { IoSearch } from "react-icons/io5"
import axios from 'axios'
import { useSelector } from 'react-redux'

const AllUsersCompo = () => {

    const loginUserData = useSelector((state) => state.users.value)

    // ================= useState Hooks
    const [allUsers, setAllUsers] = useState([])

    // ================= useEffect for render datas 
    useEffect(() => {
        axios.get("http://localhost:4000/myprofile/allUsers", {params: loginUserData})
            .then((response) => {
                setAllUsers(response.data)
            })
    }, [])

    return (
        <>
            <section className='allUserSection'>
                <ul className='searchInput'>
                    <input type="text" placeholder='search by name...' />
                    <button><IoSearch /></button>
                </ul>

                {/* ================ map from allusers useState hook ================ */}
                {
                    allUsers.map((items) => (
                        <ul className='allUsersCol' key={items._id}>
                            <img src="/user_image.png" alt="users_img" />
                            <ul className='usersInfo'>
                                <li>
                                    <span>Name:</span>
                                    {items?.name}
                                </li>
                                <li>
                                    <span>Age:</span>
                                    {items?.age}
                                </li>
                                <li>
                                    <span>Email:</span>
                                    {items?.email}
                                </li>
                            </ul>
                        </ul>
                    ))
                }
            </section>
        </>
    )
}

export default AllUsersCompo