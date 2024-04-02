import dotenv from"dotenv";
import { connectDatabase } from "./db";
dotenv.config({path:"./env"});
connectDatabase();