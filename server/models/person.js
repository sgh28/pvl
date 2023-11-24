import mongoose from "mongoose";
const personSchema = mongoose.Schema(
    {
        email:{type:String,required:true},
        name:{type:String,required:true},
        gender:{type:String,required:true},
        password:{type:String,required:true}


    }
)

export default mongoose.model("Person",personSchema);