import express from "express"
import product from '../Models/product.js'
const router = express.Router()




// define the home page route
router.get('/', async(req, res) => {

  try{
    const products = await product.find(); // finding all products
    res.json(products); // sending all products as JSON
  }catch(e){
    res.status(500).json({ message: e.message });
  }
})
// define the about route
router.post('/', async (req, res) => {
  try{
    let a = await product.create({
      ProductName: req.body.productName,
      Price: req.body.Price,
      Image:req.body.Image
      
    })

    res.send(a)
    console.log(req.body)
  }catch(e){
    console.log(e)
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
  router.put('/', (req, res) => {
    res.send('updated')
  })

export default router