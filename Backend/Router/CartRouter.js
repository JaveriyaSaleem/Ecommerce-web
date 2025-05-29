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

  router.put('/', async (req, res) => {
  try {
    const { productId, userId } = req.body;

    const updatedCart = await Cart.updateOne(
      {
        userId,
        'products.id': productId.id, // find matching product
      },
      {
        $set: {
          'products.$.quantity': productId.quantity, // update the quantity of matched product
        },
      }
    );

    // If no matching product found, then push new one
    if (updatedCart.modifiedCount === 0) {
      await Cart.updateOne(
        { userId },
        {
          $push: {
            products: productId,
          },
        },
        { upsert: true }
      );
    }

    res.status(200).json({ message: 'Cart updated successfully 💕' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong 💔' });
  }
});
router.put('/priceUpdate',async(req,res)=>{
  try{
const{userId,totalPrice} = req.body
const updateCart = await Cart.findOneAndUpdate(
  { userId: userId },                 //  Find by userId
  { totalPrice: totalPrice },         //  Update totalPrice
  { new: true }                       // Return the updated document
)
res.status(200).json({message:updateCart})
  }catch(e){
    res.status(500).json({error:"something went wrong"})
  }
})
router.put('/removeProduct',async(req,res)=>{
  const { userId, productId } = req.body;
  try{
const updatedCart = await Cart.findOneAndUpdate(
      { userId }, 
      {
        $pull: {
          products: { id: productId } , // remove the product by ID from products array
        },
      },
      { new: true }
    );

    if (!updatedCart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    res.status(200).json(updatedCart);
  }
  catch(e){
    res.status(500).json({error:"something went wrong"})
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