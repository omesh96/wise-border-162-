import React from 'react'
import {Route, Routes} from "react-router-dom"
import AdminPage from '../Admin/AdminPage'
import CartPage from '../Page/CartPage'
import OrderPage from '../Page/OrderPage'

const Allroutes = () => {
  return (
   <>
   <Routes>
    <Route path='/admin' element={<AdminPage />}></Route>
    <Route path="/orders" element={<OrderPage />} />
    <Route path="/cart" element={<CartPage />}/>
   </Routes>
   
   </>
  )
}

export default Allroutes