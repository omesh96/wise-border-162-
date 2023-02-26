import React, { useEffect, useState } from 'react'
import "../Admin/Adminpage.css"
import axios from "axios"
import {Button,Image,AlertDialog,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Heading,useToast, FormControl, FormLabel, Input} from "@chakra-ui/react"
import userlog from "../assets/user-image.jpg"
 import {ENV} from "../db.js"


const AdminPage = () => {
  const [userdata,setuserdata]=useState([])
  const [count,setcount]=useState(0)  // useEffect ko run krne k lie jb b userdata update ho
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  const cancelRef = React.useRef()
  const [loading,setloading]=useState(false)
  const toast = useToast()

  useEffect(()=>{
      getuser()
  },[count])

  const getuser=()=>{
    axios.get(`${ENV.BASE_URL}/admin/user`)
    .then((res)=>{
        console.log(res.data.data)
        setuserdata(res.data.data)
    })
    .catch((err)=>{
        console.log(err)
    })
  }
  const deleteuser=(id)=>{
    setloading(true)
     axios.delete(`${ENV.BASE_URL}/admin/user/delete/${id}`)
     .then((response)=>{
        console.log(response.data.msg)
        setcount(count+1)
       setTimeout(()=>{
        setloading(false)
        toast({
            title: 'User Deleted.',
            description: response.data.msg,
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
       },2000)
     })
     .catch((err)=>{
        console.log(err)
     })
  }

   const handledeletebtn=(id)=>{
     onClose()
    console.log("el",id)
   deleteuser(id)
   
   }
  console.log(userdata)
   if(loading) return <div className='loader'>
    <div className="wrapper">
        <Heading color={"gray"}>Deleting......</Heading >
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="shadow"></div>
    <div className="shadow"></div>
    <div className="shadow"></div>
</div>
   </div>
  return (
    <>
    <Heading>Users</Heading>
    <div className='admindiv'>
        {userdata && userdata.map((el,ind)=>{
            return  <div className="flip-card" key={el._id}>
            <div className="flip-card-inner" >
                <div className="flip-card-front">
                <Image src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="log" />
                    <p className="title">{(el.name).toUpperCase()}</p>
                    <p>{el.email}</p>
                </div>
                <div className="flip-card-back">
                    
                    <div className='backbtn'>
 <a className="btn"  onClick={()=>handledeletebtn(el._id)}>Delete</a> {/* pta nhi q modal me click krne pe sirf last element ja rha hai  */}

                   {/* <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Are You Sure Want To Delete This User</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            
          <Button colorScheme='red' mr={3} onClick={()=>handledeletebtn(el._id)}>
             DELETE
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          
          </ModalBody>

         
           
         
        </ModalContent>
      </Modal> */}
                   
                    </div>
                </div>
            </div>
          
        </div>
        })}
    </div>
    </>
  )
}

export default AdminPage