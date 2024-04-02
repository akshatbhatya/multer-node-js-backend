import mongoose from "mongoose";
import DB_NAME  from "../constants";

const connectDatabase=async()=>{
    try{
       const dataFromDataBase=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
       console.log(dataFromDataBase.connection.host);
    }
    catch(err){
        console.log(err);
    }
    
}
export {DB_NAME};

