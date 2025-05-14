import express from "express"
import Cart from '../Models/cart.js'
const router = express.Router()


// define the home page route
router.get('/', async(req, res) => {

  try{
    const cartProducts = await Cart.find(); 
    res.json(cartProducts); 
  }catch(e){
    res.status(500).json({ message: e.message });
  }
})
// define the signup route
router.post('/', async (req, res) => {
  try{
    
    let userCartDetail = await Cart.create({
        products: req.body.products,
        userId : req.body.userId,      
    })

    res.send(userCartDetail)
    console.log(req.body)
  }catch(e){
    res.status(500).json({message:e.message})
  }

})

  router.put('/', async(req, res) => {
    try{
   const { productId } = req.body;
   const { userId } = req.body;
   const { totalPrice } = req.body;
  const cartProducts = await Cart.findOneAndUpdate(
    { userId },
    // { $push: { products: productId } }, 
    { $addToSet: { products: productId }, totalPrice: totalPrice }, // Use $addToSet to avoid duplicates

    { new: true, upsert: true }, // Create a new document if it doesn't exist upsert
  )
  res.json(cartProducts);
    }catch(e){
        res.status(500).json({message:e.message})
    }
  })
  router.delete('/:userId', async(req, res) => {
    try{
      const { userId } = req.params;
      const cartProducts = await Cart.findOneAndDelete({ userId });
          if (!cartProducts) {
      return res.status(404).json({ message: "Cart not found for this user." });
    }
      res.json("Deleted Successfully");
    }catch(e){
        res.status(500).json({message:e.message})
    }
  })

export default router