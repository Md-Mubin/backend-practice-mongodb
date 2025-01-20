import React, { useState } from 'react'
import './RegisterCompo.css'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import { Link } from 'react-router'
import axios from 'axios'
import { Bounce, toast } from 'react-toastify'

const RegisterCompo = () => {

    // =========== All Hooks
    const [form, setForm] = useState({ email: "", password: "", name: "", age: "" })
    const [formError, setFormError] = useState({ emailError: "", passwordError: "", nameError: "", ageError: "" })
    const [passShow, setPassShow] = useState(false)

    // =========== Handle Submit
    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post("http://localhost:4000/register", form)
        .then((response) => {
                console.log(response)

                if (response.data.regSuccessMsg) {

                    // ----------- toast massage for registration success 
                    toast.success(`${response.data.regSuccessMsg}`, {
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
                if (response.data.existUserMsg) {

                    // ----------- toast massage for already exist user
                    toast.info(`${response.data.existUserMsg}`, {
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
                else {

                    // ============ sending errors to useState hooks
                    setFormError((prev) => ({ ...prev, nameError: response.data.nameError }))
                    setFormError((prev) => ({ ...prev, passwordError: response.data.passwordError }))
                    setFormError((prev) => ({ ...prev, emailError: response.data.emailError }))
                    setFormError((prev) => ({ ...prev, ageError: response.data.emailError }))
                }
            })

    }

    return (
        <>
            <section className='registerSection'>
                <div className="container">

                    {/* ================= login column ================= */}
                    <ul className='registerCol'>
                        <h1>Register / User Create Page</h1>

                        <form onSubmit={handleSubmit} className='registerForm'>

                            {/* =============== name part =============== */}
                            <ul className='nameRegister'>
                                <input

                                    type="text"

                                    placeholder='Your Name'

                                    onChange={(e) => { setForm((prev) => ({ ...prev, name: e.target.value })), setFormError((prev) => ({ ...prev, nameError: "" })) }}

                                />
                                <li>{formError.nameError}</li>
                            </ul>

                            {/* =============== email part =============== */}
                            <ul className='emailRegister'>
                                <input

                                    type="email"

                                    placeholder='example@gmail.com...'

                                    onChange={(e) => { setForm((prev) => ({ ...prev, email: e.target.value })), setFormError((prev) => ({ ...prev, emailError: "" })) }}

                                />
                                <li>{formError.emailError}</li>
                            </ul>

                            {/* =============== password part =============== */}
                            <ul className='passwordRegister'>
                                <input

                                    type={passShow ? "text" : "password"}

                                    placeholder='password'

                                    onChange={(e) => { setForm((prev) => ({ ...prev, password: e.target.value })), setFormError((prev) => ({ ...prev, passwordError: "" })) }}

                                />
                                <li>{formError.passwordError}</li>
                                <li onClick={() => setPassShow(!passShow)} className='passShowReg'>
                                    {
                                        passShow ? <FaRegEyeSlash /> : <FaRegEye />
                                    }
                                </li>
                            </ul>

                            {/* =============== age part =============== */}
                            <ul className='age'>
                                <input

                                    type="number"

                                    placeholder='age...'

                                    onChange={(e) => { setForm((prev) => ({ ...prev, age: e.target.value })), setFormError((prev) => ({ ...prev, ageError: "" })) }}

                                />
                                <li>{formError.ageError}</li>
                            </ul>

                            <button>Register</button>

                        </form>
                    </ul>

                    <ul className='loginPageLink'>
                        <li>Have Account?</li>
                        <li className='flex gap-2'>Go to → <Link className='text-brandColor hover:text-[#51c242] hover:scale-110 duration-200 will-change-transform' to={"/"}>Login!</Link></li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default RegisterCompo