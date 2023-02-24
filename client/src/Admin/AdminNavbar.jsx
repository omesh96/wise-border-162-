import { Button } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import { AuthContext } from './context/Allcontext'

const AdminNavbar = () => {
  const navigate=useNavigate()
  const {state,dispatch,USER,PRODUCT}=useContext(AuthContext)

  const handleuserclick=()=>{
    dispatch(PRODUCT)
  }
  const handleproductclick=()=>{
    dispatch(USER)
  }
  return (
    <div className='adminnavbar'>
        <Button colorScheme={"red"} isDisabled={state.user ? true : false} onClick={handleuserclick}>Users</Button>
        {/* <Button colorScheme={"red"} isDisabled={state.product ? true : false} onClick={handleproductclick}>Products</Button>
         */}

     </div>
  )
}

export default AdminNavbar