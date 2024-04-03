import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        lowercase:true,
        unique:true,
        trim:true,
        index:true
    },
    email:{
        type:String,
        required:[true,"email is required"],
        lowercase:true,
        trim:true,
        unique:true
    },
    fullName:{
        type:String,
        required:[true,"fullname is required"],
        index:true
    },
    avtar:{
        type:String,
        required:[true,"avar is required"]
    },
    coverAvtar:{
        type:String,
        required:false,
    },
    watchHistory:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"video"
        }
    ],
    password:{
        type:String,
        required:[true,"password is required"]
    },
    refreshToken:{
        type:String,
        required:true
    }
},{timestamps:true});


//  bcrypt password

userSchema.pre("save",async function(next){
    if(this.isModified("password")){
        this.password=await bcrypt.hash(this.password,10);
        next();
    }
})

// compare password
userSchema.methods.isPasswordChecked=async function(password){
    return await bcrypt.compare(password,this.password);
}

//  add jwt tokens access token 

//   creating method for access token

userSchema.methods.generateAccessToken=async function(){
    return await jwt.sign({
        _id:this.id,
        email:this.email,
        username:this.username,
        fullName:this.fullName,
    },
    process.env.ACCESS_TOKEN,
    {
        expiresIn:process.env.ACCESS_TOKEN_EXPIRY
    });
};


// creating refresh token 

userSchema.methods.generateRefreshToken=async function(){
    return await jwt.sign({
        _id:this.id
    },
    process.env.REFRESH_TOKEN,
    {
        expiresIn:process.env.REFRESH_TOKEN_EXPIRY
    })
}

export const user=mongoose.model("user",userSchema);