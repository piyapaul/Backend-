import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})
connectDB();



















/*
import express from "express";
const app = express()
( async () => {
    try {
    await mongoose.connect(`${process.env.MONGOBD_URL} /${DB_NMAE}`)
    app.on("error", (error) => {
        console.error("Error connecting to MongoDB", error);
        throw error;
    })
    app.liten(process.env.PORT, () => {
        console.log(`App is listening on port $
{process.env.PORT}`);
    })

    } catch (error)
{
    console.error("Error connecting to MongoDB:", error);
    throw error;
}    

})();*/
