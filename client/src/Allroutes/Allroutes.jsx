import React from 'react'
import {Route, Routes} from "react-router-dom"
import AdminPage from '../Admin/AdminPage'

const Allroutes = () => {
  return (
   <>
   <Routes>
    <Route path='/admin' element={<AdminPage />}></Route>
   </Routes>
   
   </>
  )
}

export default Allroutes