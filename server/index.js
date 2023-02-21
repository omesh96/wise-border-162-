const express=require("express")
const cors=require("cors")
const { Connection } = require("./configuration/db")
const { UserRoute } = require("./Routes/User")
require("dotenv").config()

const PORT=process.env.PORT || 8000


const app=express()

app.use(cors())
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Welcome To Big-Blow")
})

// user Routes //
app.use("/user",UserRoute)

app.listen(PORT,async ()=>{
   try{
    await Connection
    console.log(`connected to Databse`)
    console.log(`Server is running at http://localhost:${PORT}`)
   }
   catch(err){
    console.log(`Error while connecting to Database ${err}`)
   }
   
})