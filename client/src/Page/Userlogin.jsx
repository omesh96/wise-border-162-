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

import { passwordvalidate, registerValidation } from '../helper/validate'
import { convertTobase64 } from '../helper/convert'

const initdata={
 
 email:"",
 password:""
}

const UserLogin = () => {
  const [data,setdata]=useState(initdata)
  const [file,setfile]=useState()
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
  //  const x= await registerValidation(data)
    registeradmin(data)
  }

  const registeradmin=(data)=>{
    setloading(true)
    return axios.post(`${ENV.BASE_URL}/user/login`, {
        
        email:data.email,
        password:data.password
      })
      .then( (response)=> {
       console.log(response)
      setTimeout(() => {
        toast({
          title: 'Account created.',
          description: response.data.msg,
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
          navigate("/sidebar")
      }, 2000);
      })
      .catch( (error)=> {
       console.log(error)
       setloading(false)
       toast({
        title: 'Account Not created.',
        description: error.response.data.err,
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
      });
    
  }


  console.log(data)
  const {email,password}=data

  const onupload=async(e)=>{
    const base64=await convertTobase64(e.target.files[0]);
    setfile(base64)
  }
  console.log("files",file)
  if(loading){
   return<div class="loader">
   <div class="square" id="sq1"></div>
   <div class="square" id="sq2"></div>
   <div class="square" id="sq3"></div>
   <div class="square" id="sq4"></div>
   <div class="square" id="sq5"></div>
   <div class="square" id="sq6"></div>
   <div class="square" id="sq7"></div>
   <div class="square" id="sq8"></div>
   <div class="square" id="sq9"></div>
 </div>
  }
  return (
  <div className="container">
    <Toaster position='top-center' reverseOrder={false}></Toaster>
    <Heading m={"20px"}>User Login !</Heading>
 <form action="" onSubmit={handlesubmit}>
 <FormControl>
 {/* <FormLabel htmlFor='profile'>
 <Box className='userimg'> <Image src={file || avatar} alt="avatar" /></Box>
 </FormLabel>
 <Input type="file" id="profile"  name="profile" onChange={onupload} /> */}

 
   <Input type='email' style={{border:"1px solid black",width:"60%",margin:"10px"}} placeholder="User email*" onChange={handlechange} 
   value={email} name="email"  />
<Input type='password' style={{border:"1px solid black",width:"60%",margin:"10px"}} placeholder="User password*" onChange={handlechange} 
   value={password} name="password"  />
   
   
 
</FormControl>

<input type="submit" value='Lest Go!' className='submitbtn' />

 </form>
 <span className='span'>Dont Have an Account? <Link to="/userregister" style={{color:"red"}}> Register Now</Link> </span>
  <br />
 <span className='span'>forgot Password? <Link to="/forgotpassword" style={{color:"red"}}> Reset Now</Link> </span>
  
  </div>
  )
}

export default UserLogin