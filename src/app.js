import  Express  from "express";
import cors from "cors"
const app=Express();
app.use(cors({
    origin:process.env.CORS_ORIGIN,
}))

export{app};