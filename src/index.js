import dotenv from"dotenv";
import { connectDatabase } from "./db/index.js";
import  app  from "./app.js";
dotenv.config({path:"./env"});


connectDatabase().then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("server is running");

    })
}).catch((err)=>console.log(err))