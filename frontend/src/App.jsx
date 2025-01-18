
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import './App.css'
import { ToastContainer } from 'react-toastify'
import LayoutOne from './Layouts/LayoutOne'
import LoginPage from './Pages/LoginPage'
import RegisterPage from './Pages/RegisterPage'
import LayoutTwo from './Layouts/LayoutTwo'
import ProfilePage from './Pages/ProfilePage'
import AllUsersPage from './Pages/AllUsersPage'

function App() {

  const myRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<LayoutOne />}>
          <Route index element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
        </Route>
        <Route path='/myprofile' element={<LayoutTwo />}>
          <Route index element={<ProfilePage />} />
          <Route path='/myprofile/allUsers' element={<AllUsersPage />} />
        </Route>
      </Route>
    )
  )

  return (
    <>
      <ToastContainer />
      <RouterProvider router={myRoute} />
    </>
  )
}

export default App
