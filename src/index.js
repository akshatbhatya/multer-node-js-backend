import dotenv from"dotenv";
import { connectDatabase } from "./db";
import { app } from "./app";
dotenv.config({path:"./env"});
connectDatabase().then(()=>{
    app.listen(process.env.PORT,(req,res)=>{
        console.log("server is running");

    })
}).catch((err)=>console.log(err))