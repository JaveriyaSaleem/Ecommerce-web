import mongoose from "mongoose";
const CartSchema = new mongoose.Schema({
   products:Array,
   userId:String,
  });
  const Cart = mongoose.model('CartDb', CartSchema);
  export default Cart