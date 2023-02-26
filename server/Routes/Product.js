const express=require("express");
const { ProductModel } = require("../models/Productmodel");


const productRouter = express.Router(); //Route Handler

//All Products
productRouter.get('/',async (req,res)=>{
    const query = {};
    const {category,discount,price,brand,sort,order} = req.query;
    if(category)
        query.category = category;
    if(discount)
        query.discount = {$gte : discount}
    if(price)
        query.price = {$gte : price}
    if(brand)
        query.brand = brand
    try{
        const data = await ProductModel.find(query).sort({[sort] : order==='ASC'?1:-1});
        res.send(data);
    }
    catch(err)
    {
        res.send({message : "Something Went Wrong", error : err.message});
    }
})

//Single Product
productRouter.get('/:id',async (req,res)=>{
    const id = req.params.id;
    try{
        const data = await ProductModel.findById({_id : id});
        res.send(data);
    }
    catch(err){
        res.send({message : "Something Went Wrong",error : err.message})
    }
})

//Add a Product
productRouter.post('/add',async (req,res)=>{
    try{
        const newProduct = new ProductModel(req.body);
        const productId = await newProduct.save();
        res.send({message : "Product Added Successfully", productId : productId['_id']});
    }
    catch(err)
    {
        res.send({message : "Product can not be added", error : err.message});
    }
})

//Update a Product  //
productRouter.patch('/:id',async (req,res)=>{
    const id = req.params.id
    try{
        const data = await ProductModel.findByIdAndUpdate({_id: id},req.body);
        res.send({message : "Product Details Updated!", oldProductDetais : data})
    }
    catch(err)
    {
        res.send({message : "Something went Wrong!", error : err.message});
    }
})

//Delete a Product
productRouter.delete('/:id',async (req,res)=>{
    const id = req.params.id;
    try{
        const data = await ProductModel.findByIdAndDelete({_id: id});
        res.send({message : "Product has been deleted!", deletedProduct : data});
    }
    catch(err){
        res.send({message : "Something Went Wrong!", error:  err.message});
    }
})

// product add to cart by user //
productRouter.post("/addtocart",async(req,res)=>{
    const {id,email}=req.body      // id means id of product and email of login user
    try{
        const data = await ProductModel.findById({_id : id});
        console.log(data)
    }
    catch(err){
        res.status(501).send({error:"Item Not Added To Cart"})
    }
})

//export 
module.exports = {
    productRouter
}
