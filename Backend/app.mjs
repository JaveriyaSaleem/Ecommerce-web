import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import connectingFuction from "./Db/db.js"
import AdminRouter from "./Router/AdminRouter.js"
const app = express()
const port = 3000
import path from "path"
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, 'dist')));

app.use(cors())
app.use(express.json())
app.use('/admin', AdminRouter)
console.log(connectingFuction())
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})