import mongoose from "mongoose"
import "dotenv/config"
const url = process.env.MONGODB_URL
import chalk from "chalk";


const connectToDB =async()=>{
    try{

       await mongoose.connect(url,{dbName:"ecommerce-website"});
        console.log(chalk.bgGreen.white("connected to db"))
    }
    catch(e){
        console.log(e)
    }

}
export default connectToDB

// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));