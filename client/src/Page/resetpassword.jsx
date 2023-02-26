import React from 'react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Heading,
  Image,
  Box,useToast 
} from '@chakra-ui/react'
import "../Admin/Signup/Signup.css"
import { Link, useNavigate } from 'react-router-dom'
import avatar from ".././assets/profile.png"
import { Toaster } from "react-hot-toast"
import { useState } from 'react'
import axios from "axios"
import {ENV} from "../db"



const initdata={
password:""
}

const Resetpassword = () => {
  const [data,setdata]=useState(initdata)
  
  const navigate=useNavigate()
  const toast = useToast()
  const [loading,setloading]=useState(false)

  const handlechange=(e)=>{
    const {name,value}=e.target 
    setdata({
      ...data,
      [name]:value,
     
     
    })
  }

  const handlesubmit=async(e)=>{
    e.preventDefault() 
    registeradmin(data)
  }

  const registeradmin=(data)=>{
    setloading(true)
    console.log(data.email)
    return axios.patch(`${ENV.BASE_URL}/user/setpass`, {
       email:localStorage.getItem("forgotemail"),
       password:data.password
      })
      .then( (response)=> {
       console.log(response.data)
      setTimeout(() => {
        toast({
            title: 'Password Changed.',
            description: response.data.msg,
            status: 'success',
            duration: 4000,
            isClosable: true,
          })
          setloading(false)
           // navigate("/resetpass")
      }, 2000);
      })
      .catch( (error)=> {
       console.log(error)
       setloading(false)
       toast({
        title: 'Wrong email.!.',
        description: error.response.data.err,
        status: 'error',
        duration: 4000,
        isClosable: true,
      })
     
      });
    
  }


  console.log(data)
  const {password}=data

  
  
  if(loading){
    return<div className="loader">
    <div className="square" id="sq1"></div>
    <div className="square" id="sq2"></div>
    <div className="square" id="sq3"></div>
    <div className="square" id="sq4"></div>
    <div className="square" id="sq5"></div>
    <div className="square" id="sq6"></div>
    <div className="square" id="sq7"></div>
    <div className="square" id="sq8"></div>
    <div className="square" id="sq9"></div>
  </div>
   }
  return (
  <div className="container"  >
    <Toaster position='top-center' reverseOrder={false}></Toaster>
    <Heading>Reset Your Password !</Heading>
 <form action="" onSubmit={handlesubmit}>
 <FormControl>


 
   <Input type='email' style={{border:"1px solid black",width:"60%",margin:"10px"}} placeholder="enter new password*" onChange={handlechange} 
   value={password} name="password"  />

 
</FormControl>

<input type="submit" value='Register' className='submitbtn' />

 </form>

  </div>
  )
}

export default Resetpassword