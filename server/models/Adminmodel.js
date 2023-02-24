
const mongoose=require("mongoose")

const AdminSchema=mongoose.Schema({
    name:{
     type:String,
         },
    password:{
        type:String,
        required:[true, "Please provide a Password"],
        unique:false
    },
    email:{
        type:String,
        required:[true, "please provide a unique email"],
        unique:true
    },
   
    mobile:{
        type:Number,
        required:[true, "Please provide a Mobile Number"]
    },
    address:{type:String},
    profile:{type:String}
   
})

const AdminModel=mongoose.model("admin",AdminSchema)

module.exports={AdminModel}