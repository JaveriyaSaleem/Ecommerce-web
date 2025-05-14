import express from "express"
import Order from '../Models/order.js'
const router = express.Router()


// define the home page route
router.get('/', async(req, res) => {

  try{
    const orderList = await Order.find(); 
    res.json("hey"); 
  }catch(e){
    res.status(500).json({ message: e.message });
  }
})
// define the signup route
router.post('/', async (req, res) => {
  try{
    let OrderDetail = await Order.create({
        OrderNumber: `ShopCo-${Date.now()}-${Math.floor(Math.random() * 10000)}`,     
        Name : req.body.userName,      
        PaymentMethod : "Cash on Delivery",      
        Email : req.body.email,      
        Address : req.body.address,  
        TotalPrice:req.body.totalPrice,
        Products:req.body.products,
        userId:req.body.userId   
    })
    res.send(OrderDetail)
    console.log(req.body)
  }catch(e){
    res.status(500).json({message:e.message})
  }

})


export default router