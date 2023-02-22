import { Box, Text,Image,Heading} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'


   
import AdminNavbar from './AdminNavbar.jsx'
import AdminPage from './AdminPage.jsx'

const Sidebar = () => {
  
  return (
    <div className='sidebar_main_box'>
        <div className='sidebar'>
            <Heading as={"h1"} >Admin DashBoard</Heading>
            <Image src="https://images.freeimages.com/fic/images/icons/2526/bloggers/256/admin.png" alt="pict" />
            <Box className='admin_info'>
                <Text className='admin_info_text'>Omesh dubey</Text>
                <Text className='admin_info_text'>Omesh dubey</Text>
            </Box>
        </div>

        <div className='main_content'>
            <AdminNavbar />
       <AdminPage />
        </div>

    </div>
  )
}

export default Sidebar