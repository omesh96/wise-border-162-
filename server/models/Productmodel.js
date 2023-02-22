const mongoose=require("mongoose")

//Product Structure
const productSchema = mongoose.Schema({
    category : {type : String, required : [true,"Product Category missing"]},
    brand : {type : String , required : [true,"Brand Name missing"]},
    name : {type : String, required : [true,"Product Name missing"]},
    price: {type : Number, required : [true,"Product value missing"]},
    discount : {type : Number, required : [true,"Discount missing"]},
    description : {type : String, required : [true, "Product Desc. Missing"]},
    images : {type : String, required : [true,"Product Images missing"]},
    ratings : {type : Number, required :[true,"Product Rating missing"]},
    reviews : {type : Number, required : [true,"Product Reviews missing"]},
    available : {type: Boolean, required : [true,"Product Availability missing"]}
},{
    versionKey : false
});


//Product Constructor Function
const ProductModel = mongoose.model('product',productSchema);

module.exports = {
    ProductModel
};