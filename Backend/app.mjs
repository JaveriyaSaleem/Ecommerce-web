import express from "express"

import cors from "cors"
import connectToDb from "./db/db.js"
import AdminRouter from "./Router/AdminRouter.js"
import SignupRouter from './Router/SignupRouter.js'
import CartRouter from './Router/CartRouter.js'
const app = express()
const port = 3000;
// add these command in your project 
import path from "path"
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, 'dist')));

app.use(cors())
app.use(express.json())
app.use('/products', AdminRouter)
app.use('/auth', SignupRouter)
app.use('/cart', CartRouter)
console.log(connectToDb())
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})