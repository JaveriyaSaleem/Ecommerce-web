import express from "express"
import mongoose from "mongoose"
const app = express()
const port = 3000
import connectingFuction from "./Db/db.js"

console.log(connectingFuction())
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})