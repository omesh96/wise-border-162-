const express=require("express")
const bcrypt=require("bcrypt")
const { UserModel } = require("../models/Usermodel")
require("dotenv").config()
const jwt=require("jsonwebtoken")


const UserRoute=express.Router()


// Register a user // 
UserRoute.post("/register",(req,res)=>{
    const {email,password,name,address,mobile}=req.body

    try{

        // check for exist username //
        // const existusername= new Promise((resolve,reject)=>{
        //     UserModel.findOne({username}, (err,user)=>{
        //         if(err) reject(new Error(err))
        //         if(user) reject({error:"please use unique Username"})
        //         resolve()
        //     })
        //  })

    
        // check for existing email //
        const existemail= new Promise((resolve,reject)=>{
            let regexpression = "[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+[.]+[a-z]{2,3}$"; // checking for correct email id
            let resp = email.match(regexpression);
            if(!resp){
                reject("Invalid email") 
               
            } else{
                UserModel.findOne({email}, (err,email)=>{
                    if(err) reject(new Error(err))
                    if(email) reject({error:"This email id is already in use"})
                    resolve()
                })
            }
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
            return res.status(500).send({err:err})
         })
        
    }
    catch(err){
        return res.status(500).send(err)
    }
})

// Login User //
UserRoute.post("/login",(req,res)=>{
    const {email,password}=req.body
    try{
        UserModel.findOne({email},(err,user)=>{
            if(!user) return  res.status(404).send({err:"email Not Found..!"})
            if(user){
             bcrypt.compare(password,user.password,(err,result)=>{  // comapiring hashed password
                if(result){
                    // create jwt token //
                    //   const token=jwt.sign({userId:user._id,name:user.name},process.env.SECRET_KEY,{expiresIn:"24h"})
                    const token=jwt.sign({userId:user._id},process.env.SECRET_KEY)
                    return res.status(200).send({msg:"Login Successfull...!",name:user.name,token:token})
                }   
                else{
                   return  res.status(404).send({err:"Password Did Not Match"})
                }
             })
            }
        })
       }
       catch(err){
       return res.status(500).send({err})
       }
})

// forgot password // 
UserRoute.get("/forgot", async(req,res)=>{
    const {email} = req.body;
  
    try{
        UserModel.findOne({email},(err,user)=>{
        if(!user) return  res.status(404).send({err:"email Not Found..!",isUser:false})
 if(user) return  res.status(200).send({isUser:true,useremail:email}) ; // store this email in local-storage
       // frontend me agar isUser true aa rha hai to update password wale page pe bhej dena hai
             }) 
  } 
  catch(err){
    return res.status(500).send({err})
  }
 } );


  // after verifying email now user can change their password //
  UserRoute.patch("/setpass",async(req,res)=>{
    const email = req.body.email;  // email frontend se local-storage se bhej dena
    const password= req.body.password
    try {
       UserModel.findOne({email},(err,user)=>{
        if(!user) return  res.status(404).send({err:"email Not Found..!"})
        if(user){
            if(password){
                bcrypt.hash(password,5,async(err,hash)=>{
               if(err){
                   return res.status(500).send({err:"error while hashing the password"})
               } else{
                   UserModel.updateOne({email },{password:hash},(err,data)=>{
                    if(err) throw err
                    return res.status(201).send({msg:"Password Updated Successfully...!"})
                   })
                    }
                })
                  } else{
                    return res.status(404).send({msg:"Please Enter Password"})
                  }
        }
      });



     
    }  catch (err) {
        return res.status(500).send({err})
     
    }
  })


module.exports={UserRoute}