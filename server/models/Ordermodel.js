const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    userId  : {type : String, required: [true, "UserId Required to Place an Order"]},
    placedOn : {type : String, required: true},
    products : {type : Array, required : true},
    orderTotal : {type : Number, required : true},
    orderStatus : {type : String, required : true},
},{
    versionKey : false
})

const OrderModel = mongoose.model('order',orderSchema)

module.exports = {
    OrderModel
}