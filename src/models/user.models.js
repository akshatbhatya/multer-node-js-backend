import bcrypt from "bcrypt";
import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        trim:true,
        index:true,
        lowercase:true,
        unique:true
    },
    email:{
        type:String,
        trim:true,
        lowercase:true,
        unique:true
    },
    avtar:{
        type:String,
        required:true
    },
    coverPhoto:{
        type:String,
        required:false
    },
    watchHistory:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"video"
        }
    ],
    password:{
        type:String,
        required:[true,"Password Is required"]
    }

},{timestamps:true});

userSchema.pre("save",async function(){
    if(this.password.isModified){
        return this.password=await bcrypt.hash("password",10);
    }
    
});





const user=mongoose.model("user",userSchema);



export default user;