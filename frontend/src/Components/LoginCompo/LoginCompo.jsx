import React from 'react'
import './LoginCompo.css'
import { useState } from 'react'
import { Bounce, toast } from 'react-toastify'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { userSliceReducer } from '../../Slices/UserSlice'

const LoginCompo = () => {

  // =========== All Hooks
  const [form, setForm] = useState({ email: "", password: "" })
  const [formError, setFormError] = useState({ emailError: "", passwordError: "" })
  const [passShow, setPassShow] = useState(false)

  // =========== Dispatch Handle
  const dispatch = useDispatch()

  // =========== Navigate Handle
  const naviagte = useNavigate()

  // =========== Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault()

    await axios.post("http://localhost:4000/login", form)
      .then((response) => {

        setFormError((prev) => ({ ...prev, emailError: response.data.emailError }))
        setFormError((prev) => ({ ...prev, passwordError: response.data.passwordError }))

        if (response.data.loginFailedMsg) {

          toast.error(`${response.data.loginFailedMsg}`, {
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

        if (response.data.registeredUser) {

          localStorage.setItem("loginUser", JSON.stringify(response.data.registeredUser))

          dispatch(userSliceReducer(response.data.registeredUser))

          naviagte("/myProfile")

          toast.success(`${response.data.loginSuccessMsg}`, {
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
      })
  }

  return (
    <>
      <section className='loginSection'>
        <div className="container">

          {/* ================= login column ================= */}
          <ul className='loginCol'>
            <h1>Login Page</h1>

            <form onSubmit={handleSubmit} className='loginForm'>

              {/* =============== email part =============== */}
              <ul className='emailLogin'>
                <input

                  type="email"

                  placeholder='example@gmail.com...'

                  onChange={(e) => { setForm((prev) => ({ ...prev, email: e.target.value })), setFormError((prev) => ({ ...prev, emailError: "" })) }}

                />
                <li>{formError.emailError}</li>
              </ul>

              {/* =============== password part =============== */}
              <ul className='passwordLogin'>
                <input

                  type={passShow ? "text" : "password"}

                  placeholder='password'

                  onChange={(e) => { setForm((prev) => ({ ...prev, password: e.target.value })), setFormError((prev) => ({ ...prev, passwordError: "" })) }}

                />
                <li>{formError.passwordError}</li>
                <li onClick={() => setPassShow(!passShow)} className='passShowLogin'>
                  {
                    passShow ? <FaRegEyeSlash /> : <FaRegEye />
                  }
                </li>
              </ul>

              <button>Login</button>

            </form>
          </ul>

          <ul className='regPageLink'>
            <li>Don't Have Account?</li>
            <li className='flex gap-2'>Go to → <Link className='text-brandColor hover:text-[#51c242] hover:scale-110 duration-200 will-change-transform' to={"/register"}>Register!</Link></li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default LoginCompo