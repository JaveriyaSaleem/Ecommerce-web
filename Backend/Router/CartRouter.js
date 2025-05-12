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
router.delete('/:id', async(req, res) => {
  try {
    const { id } = req.params;
    const deletedProduct = await product.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  })
  router.put('/', async(req, res) => {
    try{
   const { productId } = req.body;
   const { userId } = req.body;
  const cartProducts = await Cart.findOneAndUpdate(
    { userId },
    // { $push: { products: productId } }, 
    { $addToSet: { products: productId } },
    { new: true, upsert: true } // Create a new document if it doesn't exist upsert
  )
  res.json(cartProducts);
    }catch(e){
        res.status(500).json({message:e.message})
    }
  })

export default router