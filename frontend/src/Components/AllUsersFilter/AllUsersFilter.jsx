import React from 'react'
import './AllUsersFilter.css'

const AllUsersFilter = () => {
    return (
        <>
            <section className='allUsersFilterSection'>
                <h1>Advanced Filter</h1>

                <ul className='advanceSearchCol'>
                    <li>Search by Age:
                        <input type="number" placeholder='Age...'/>
                    </li>
                    <li>Search by Email:
                        <input type="email" placeholder='example@gmail.com'/>
                    </li>
                    <button>Search</button>
                </ul>

            </section>
        </>
    )
}

export default AllUsersFilter