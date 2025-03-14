import mongoose from "mongoose";
const mySchema = mongoose.Schema ({
username:{
    type:String,
    required: true,
},
email:{
    type:String,
    required:true,
},
password:{
    type:String,
    required:true,
    min:[6,"too week"]
}
})
mySchema.index({email:1},{unique:true})
const schema = mongoose.model('userSchemas',mySchema)
export default schema