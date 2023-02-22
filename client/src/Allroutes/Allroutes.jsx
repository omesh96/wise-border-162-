import React from 'react'
import {Route, Routes} from "react-router-dom"
import AdminNavbar from '../Admin/AdminNavbar'
import AdminPage from '../Admin/AdminPage'
import Sidebar from '../Admin/Sidebar'

const Allroutes = () => {
  return (
   <>
   <Routes>
    <Route path='/admin' element={<AdminPage />}></Route>
    <Route path='/sidebar' element={<Sidebar />}></Route>
    <Route path='/adminnav' element={<AdminNavbar />}></Route>
   </Routes>
   
   </>
  )
}

export default Allroutes