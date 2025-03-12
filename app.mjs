import express from "express"
import schema from "./Model/schema.js"
import chalk from "chalk";
import connectToDb from "./db/db.js";
const app = express()
const port = 3000
const array = []
app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post('/addedData',async(req,res)=>{
  const newUser = new schema({...req.body})
  await newUser.save();
  res.send({ message: "User added successfully", user: newUser });
})
app.get('/all',(req,res)=>{
  res.send(array)
})
connectToDb()
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})