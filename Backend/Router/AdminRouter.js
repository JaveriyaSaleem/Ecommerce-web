import express from "express"
import product from '../Models/product.js'
const router = express.Router()



// define the home page route
router.get('/admin', (req, res) => {
  res.send('data of users')
})
// define the about route
router.post('/', async (req, res) => {
    let a = await product.create({
        ProductName: req.body.productName,
        Price: req.body.Price,
        
      })
      a.save()
      res.send(req.body)
      console.log(req.body)
})
router.delete('/', (req, res) => {
    res.send('deleting user')
  })
  router.put('/', (req, res) => {
    res.send('updated')
  })

export default router