import express from "express"
import signup from '../Models/signup.js'
const router = express.Router()
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
dotenv.config();




// define the home page route
router.get('/', async(req, res) => {

  try{
    const users = await signup.find(); 
    res.json(users); 
  }catch(e){
    res.status(500).json({ message: e.message });
  }
})
// define the signup route
router.post('/', async (req, res) => {
  try{
    const token = jwt.sign(
        { email: req.body.email },
        process.env.JWT_SECRET, 
        { expiresIn: "1h" }
      );
    let userDetail = await signup.create({
        Username: req.body.username,
        email: req.body.email,
        Password:req.body.password,
        token:token
      
    })

    res.send(userDetail)
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
  router.put('/', (req, res) => {
    res.send('updated')
  })

export default router