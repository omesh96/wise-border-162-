const express=require("express")
const bcrypt=require("bcrypt")
const { UserModel } = require("../models/Usermodel")
require("dotenv").config()

const UserRoute=express.Router()


// Register a user // 
UserRoute.post("/register",(req,res)=>{
    const {email,password,name,address,mobile}=req.body

    try{
    
        // check for existing email //
        const existemail= new Promise((resolve,reject)=>{
            UserModel.findOne({email}, (err,email)=>{
                if(err) reject(new Error(err))
                if(email) reject({error:"This email id is already in use"})
                resolve()
            })
         })

         // check for Mobile number //
         const existmobile= new Promise((resolve,reject)=>{
            UserModel.findOne({mobile}, (err,mobile)=>{
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
            const user=new UserModel({name,email,password:hash,address,mobile})
            await user.save()
            res.status(201).send({msg:"User Register Successfully !"})
        }
         })
           }
         })
         .catch((err)=>{
            return res.status(500).send({err})
         })
        
    }
    catch(err){
        return res.status(500).send(err)
    }
})


module.exports={UserRoute}