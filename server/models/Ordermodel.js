const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    userId  : {type : String, required: [true, "UserId Required to Place an Order"]},
    placedOn : {type : Date, required: true},
    products : {type : Array, required : true},
    orderTotal : {type : Number, required : true},
    orderStatus : {type : String, required : true},
})

const OrderModel = mongoose.model('order',orderSchema)

module.exports = {
    OrderModel
}