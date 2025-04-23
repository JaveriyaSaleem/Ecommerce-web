import mongoose from "mongoose";
const ecommerceSchema = new mongoose.Schema({
    ProductName: String,
    Price:Number
    
  });
  const Ecommerce = mongoose.model('Ecommerce', ecommerceSchema);
  export default Ecommerce