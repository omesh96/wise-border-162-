const express=require("express")
const bcrypt=require("bcrypt")

require("dotenv").config()
const jwt=require("jsonwebtoken")
const { UserModel } = require("../models/Usermodel")
const { AdminModel } = require("../models/Adminmodel")

const AdminRoute=express.Router()


  // Register a admin // 
AdminRoute.post("/register",(req,res)=>{
    const {email,password,name,address,mobile}=req.body

    try{
    // check for existing email //
        const existemail= new Promise((resolve,reject)=>{
            let regexpression = "[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+[.]+[a-z]{2,3}$"; // checking for correct email id
            let resp = email.match(regexpression);
            if(!resp){
                reject("Invalid email") 
               
            } else{
                AdminModel.findOne({email}, (err,email)=>{
                    if(err) reject(new Error(err))
                    if(email) reject({error:"This email id is already in use"})
                    resolve()
                })
            }
         })

         // check for Mobile number //
         const existmobile= new Promise((resolve,reject)=>{
            AdminModel.findOne({mobile}, (err,mobile)=>{
                if(err) reject(new Error(err))
                if(mobile) reject({error:"This Mobile Number is already in use"})
                resolve()
            })
         })

         // now after checking above two condition now go for next step

         Promise.all([existemail,existmobile])  // ye promise upar k dono promise khtm hone ka wait krega
         .then(()=>{
           if(password){
         bcrypt.hash(password,5,async(err,hash)=>{
        if(err){
            return res.status(500).send({err})
        } else{
            const admin=new AdminModel({name,email,password:hash,address,mobile})
            await admin.save()
            res.status(201).send({msg:"Admin Register Successfully !"})
        }
         })
           }
         })
         .catch((err)=>{
            return res.status(500).send({err:err})
         })
        
    }
    catch(err){
        return res.status(500).send(err)
    }
})

// Login User //
AdminRoute.post("/login",(req,res)=>{
    const {email,password,secret_code}=req.body  // during login admin have to enter a secret_code to login as admin
    try{
        AdminModel.findOne({email},(err,user)=>{
            if(!user) return  res.status(404).send({err:"email Not Found..!"})
            if(user){
            if(secret_code===process.env.SECRET_CODE){
                bcrypt.compare(password,user.password,(err,result)=>{  // comapiring hashed password
                    if(result){
                        // create jwt token //
                        //   const token=jwt.sign({userId:user._id,name:user.name},process.env.SECRET_KEY,{expiresIn:"24h"})
                        const token=jwt.sign({userId:user._id},process.env.SECRET_KEY)
                        return res.status(200).send({msg:"Login Successfull...!",name:user.name,email:user.email,mobile:user.mobile,token:token})
                        // store all this information of admin in frontend to show in sidebar admin info...
                    }   
                    else{
                       return  res.status(404).send({err:"Password Did Not Match"})
                    }
                 })
            } else{
                return res.status(401).send({msg:"You are not authorised to login as Admin"})
            }
            }
        })
       }
       catch(err){
       return res.status(500).send({err})
       }
})

// geting all user for admin
 AdminRoute.get('/user',async(req,res)=>{
    try{
   const data=await UserModel.find()
   if(data){
    return res.status(201).send({data:data})
   } else{
        return res.status(501).send({err:"No User Found...!"})
   }
    }
    catch(err){
        res.status(501).send({err:"No User Found...!"})
    }
 })


  // delete any user by adnin //
 AdminRoute.delete("/user/delete/:id",async(req,res)=>{
    let id=req.params.id
    try{
        const user=await UserModel.findById(id)
        console.log(user)
      await UserModel.findByIdAndDelete({_id:id})
      return res.status(201).send({msg:`Data of ${user.name} Deleted Successfully`})
    }
    catch(err){
        res.status(501).send({err:err})
    }
 })

module.exports={AdminRoute}