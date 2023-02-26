const express = require('express');
const { OrderModel } = require('../models/Ordermodel');


//Order Router setup
const orderRouter = express.Router();

//All orders && get via userId
orderRouter.get('/',async (req,res)=>{
    const query = {};
    if(req.query.status)
        query.orderStatus = req.query.status
    if(req.query.userId)
        query.userId = req.query.userId
    try{
        const data = await OrderModel.find(query);
        res.send(data);
    }
    catch(err){
        res.send({message : "Something Went Wrong!",error : err.message})
    }
})

//Single Order
orderRouter.get('/:id',async (req,res)=>{
    const id = req.params.id;
    try{
        const data = await OrderModel.findById({_id : id})
        res.send(data);
    }
    catch(err)
    {
        res.send({message : "Something Went Wrong!",error : err.message})
    }
})

//Place an Order
orderRouter.post('/placeOrder',async (req,res)=>{
    try{
        const newOrder = new OrderModel(req.body);
        await newOrder.save();
        res.send({message : "Order Placed Successfully!"});
    }
    catch(err){
        res.send({message : "Something Went Wrong!", error : err.message})
    }
})


//Cancel an order
orderRouter.delete('/:id',async (req,res)=>{
    const id = req.params.id;
    try{
        await OrderModel.findByIdAndDelete({_id : id})
        res.send({message : "Order deleted!"});
    }catch(err){
        res.send({message :"Something Went Wrong",error : err.message})
    }
})

//Update Order status
orderRouter.patch('/updateOrderStatus/:id',async (req,res)=>{
    const id = req.params.id
    try{
        await OrderModel.findByIdAndUpdate({_id : id}, {orderStatus : req.body.orderStatus});
        res.send({message : `Order ${req.body.orderStatus}`});
    }
    catch(err){
        res.send({message : "Something Went Wrong!", error : err.message});
    }
})

module.exports = {
    orderRouter
}

