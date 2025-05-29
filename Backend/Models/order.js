import mongoose from "mongoose";
const OrderSchema = new mongoose.Schema({
   OrderNumber:String,
   Name:String,
   PaymentMethod:String,
   Email:String,
   Address:String,
   TotalPrice:Number,
   Products:Array,
   userId:String,
   Date:{type:Date, default:Date.now},
   RegisteredEmail:String
  });
  const Order = mongoose.model('dbOrder', OrderSchema);
  export default Order