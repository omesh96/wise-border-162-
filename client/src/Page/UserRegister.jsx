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
 name:"",
 email:"",
 password:"",
 mobile:"",
 address:""
}

const UserRegister = () => {
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
     // profile:file || ""
      profile:""
    })
  }

  const handlesubmit=async(e)=>{
    e.preventDefault() 
    const x= await registerValidation(data)
    if(!x.password  && !x.email){
        // call the function to post data to backend
        registeradmin(data)
       } else{
        return x
       }
  }

  const registeradmin=(data)=>{
    setloading(true)
    return axios.post(`${ENV.BASE_URL}/user/register`, {
        name:data.name,
        email:data.email,
        password:data.password,
        mobile:data.mobile,
        password:data.password,
        profile:data.profile
      })
      .then( (response)=> {
       console.log(response.data.msg)
      setTimeout(() => {
        toast({
            title: 'Account created.',
            description: response.data.msg,
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
          setloading(false)
            navigate("/userlogin")
      }, 2000);
      })
      .catch( (error)=> {
       console.log(error)
       toast({
        title: 'Account Not created.',
        description: error.response.data.error.error,
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
      setloading(false)
      });
    
  }


  console.log(data)
  const {name,email,password,address,mobile}=data

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
    <Heading>User Register !</Heading>
 <form action="" onSubmit={handlesubmit}>
 <FormControl>
 <FormLabel htmlFor='profile'>
 <Box className='userimg'> <Image src={file || avatar} alt="avatar" /></Box>
 </FormLabel>
 <Input type="file" id="profile"  name="profile" onChange={onupload} />

 <Input type='text' style={{border:"1px solid black",width:"60%"}} placeholder="Username*" onChange={handlechange} 
   value={name} name="name"  />
   <Input type='email' style={{border:"1px solid black",width:"60%",margin:"10px"}} placeholder="User email*" onChange={handlechange} 
   value={email} name="email"  />
<Input type='password' style={{border:"1px solid black",width:"60%"}} placeholder="User password*" onChange={handlechange} 
   value={password} name="password"  />
   <Input type='text' style={{border:"1px solid black",width:"60%"}} placeholder="User Address*" onChange={handlechange} 
   value={address} name="address"  />
   <Input type='number' style={{border:"1px solid black",width:"60%"}} placeholder="User Mobile*" onChange={handlechange} 
   value={mobile} name="mobile"  />
 
</FormControl>

<input type="submit" value='Register' className='submitbtn' />

 </form>
 <span className='span'>Already Register? <Link to="/userlogin" style={{color:"red"}}> Login Now</Link> </span>
  </div>
  )
}

export default UserRegister