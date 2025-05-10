import mongoose from "mongoose";
const ecommerceUserSchema = new mongoose.Schema({
    Username: {
        type:String,
        required: [true, 'Username is required'],
        trim: true,
    },email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        trim: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email'],
      },
    Password:{ type:String,required: [true, 'Password is required'],
        minlength: [6, 'Password must be at least 6 characters'],},
        token:String
    
  });
  const Users = mongoose.model('users', ecommerceUserSchema);
  export default Users