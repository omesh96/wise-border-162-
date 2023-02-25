import React from 'react'
import {Route, Routes} from "react-router-dom"
import AdminNavbar from '../Admin/AdminNavbar'
import AdminPage from '../Admin/AdminPage'
import ProductPage from '../Admin/Productpage'
import Sidebar from '../Admin/Sidebar'
import AdminLogin from '../Admin/Signup/AdminLogin'
import AdminRegister from '../Admin/Signup/AdminSignup'
import AddProductModal from '../Component/AddProductModal'
import UpdateProductModal from '../Component/UpdateProductModal'
import ForgotPassword from '../Page/Forgotpassword'
import Resetpassword from '../Page/resetpassword'
import UserLogin from '../Page/Userlogin'
import UserRegister from '../Page/UserRegister'


const Allroutes = () => {
  return (
   <>
   <Routes>
    <Route path='/admin' element={<AdminPage />}></Route>
    <Route path='/sidebar' element={<Sidebar />}></Route>
    <Route path='/adminnav' element={<AdminNavbar />}></Route>
    <Route path='/adminproduct' element={<ProductPage />}></Route>
    <Route path='/addproduct' element={<AddProductModal />}></Route>
    <Route path='/updateproduct' element={<UpdateProductModal />}></Route>
    <Route path='/adminregister' element={<AdminRegister />}></Route>
    <Route path='/adminlogin' element={<AdminLogin />}></Route>
    <Route path='/userregister' element={<UserRegister />}></Route>
    <Route path='/userlogin' element={<UserLogin />}></Route>
    <Route path='/forgotpass' element={<ForgotPassword />}></Route>
    <Route path='/resetpass' element={<Resetpassword />}></Route>
   </Routes>
   
   </>
  )
}

export default Allroutes