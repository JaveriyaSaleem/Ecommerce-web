import express from 'express';
const app = express();

import cors from "cors";
import userRoutes from "./Router/userRoutes.js";
import connectToDb from "./db/db.js";
import cartRoutes from "./Router/cartRoutes.js"




app.use(express.json());

// connect to db
connectToDb();

// middlewares

// app.get("/",(req,res)=>{
//   res.send("server is active")
// })

app.use('/api/auth', userRoutes);
app.use('/api/cart', cartRoutes);


// app.use('/api/products', productRoutes);

app.listen(5000, () => {
	console.log('server is listening 5000');
});
