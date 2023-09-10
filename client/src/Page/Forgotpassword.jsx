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
email:""
}

const ForgotPassword = () => {
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
    return axios.post(`${ENV.BASE_URL}/user/forgot`, {
       email:data.email
      })
      .then( (response)=> {
       console.log(response.data)
      setTimeout(() => {
        toast({
            title: 'Email Verified.',
            description: response.data.msg,
            status: 'success',
            duration: 4000,
            isClosable: true,
          })
          setloading(false)
          localStorage.setItem("forgotemail",data.email)
            navigate("/resetpass")
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
  const {email}=data

  
  
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
    <Heading>Verify Your email !</Heading>
 <form action="" onSubmit={handlesubmit}>
 <FormControl>


 
   <Input type='email' style={{border:"1px solid black",width:"60%",margin:"10px"}} placeholder="User email*" onChange={handlechange} 
   value={email} name="email"  />

 
</FormControl>

<input type="submit" value='Register' className='submitbtn' />

 </form>

  </div>
  )
}

export default ForgotPassword