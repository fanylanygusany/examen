import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";

dotenv.config()
mongoose.conect(process.env.url_db)

.then(()=>{
    console.long("dios me escucho y si jalo")
})
.catch((error)=>{
    console.lag("dios no me escucho y no jalo", error)
})

const app=express();
app.use(corse());
app.liten(4000, ()=>{
    console.log("si se escucha el servidor qwq")
})
test()
