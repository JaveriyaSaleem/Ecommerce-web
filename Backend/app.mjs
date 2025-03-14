import express from "express"
const app = express()
import connectToDB from "./db/db.js"
import cors from "cors"
app.use(cors())
app.use(express.json())
connectToDB()
app.listen(5000,()=>{
    console.log("Hi World")
})