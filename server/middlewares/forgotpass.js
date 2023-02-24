const { UserModel } = require("../models/Usermodel")


const putemailinbodybeforeupdatepass=async(req,res,next)=>{
            const {email}=req.body
    
            const user=await UserModel.find({email:email})
        
            if(user.length>0){
            
                req.body.useremail=user[0].email 
                next()
            } else{
                res.status(501).send({msg:"Please Login First"})
            }

}

module.exports={putemailinbodybeforeupdatepass}