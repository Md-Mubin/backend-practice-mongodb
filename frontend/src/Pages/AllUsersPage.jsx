import React from 'react'
import AllUsersCompo from '../Components/AllUsersCompo/AllUsersCompo'
import AllUsersFilter from '../Components/AllUsersFilter/AllUsersFilter'

const AllUsersPage = () => {
    return (
        <>
            <div className='container'>
                <ul className='flex items-start gap-4 mt-4'>
                    {/* <AllUsersFilter /> */}
                    <AllUsersCompo />
                </ul>
            </div>
        </>
    )
}

export default AllUsersPage