const express=require("express")
const cors=require("cors")


const app=express()

app.use(cors())
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Welcome To Wise-Border")
})

app.listen(8000,()=>{
    console.log("server is running at http://localhost:8000")
})