import { Box, Text,Image,Heading, Button} from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import AddProductModal from '../Component/AddProductModal.jsx'
import AdminNavbar from './AdminNavbar.jsx'
import AdminPage from './AdminPage.jsx'
import { AuthContext } from './context/Allcontext.jsx'
import ProductPage from './Productpage.jsx'

const Sidebar = () => {
    const navigate=useNavigate()
    const {state,dispatch,USER,PRODUCT,PRODUCT_MODAL}=useContext(AuthContext)
  
  return (
    <div className='sidebar_main_box'>
        <div className='sidebar'>
            <Heading as={"h1"} >Admin DashBoard</Heading>
            <Image src="https://images.freeimages.com/fic/images/icons/2526/bloggers/256/admin.png" alt="pict" />
            <Box className='admin_info'>
                <Text className='admin_info_text'>Omesh dubey</Text>
                <Text className='admin_info_text'>Omesh dubey</Text>
            </Box>
            <Box className='addproductbtn' >
               {state.user &&  <Button colorScheme='green' variant='solid' onClick={()=>dispatch(PRODUCT_MODAL)} >All Products</Button>}
            </Box>
        </div>

        <div className='main_content'>
            <AdminNavbar />
        { state.user ? <AdminPage /> : state.product_modal ? <AddProductModal /> : ""}
        </div>

    </div>
  )
}

export default Sidebar