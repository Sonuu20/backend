import { configDotenv } from "dotenv";
import connectDB from "./db/index.js";


configDotenv({
    path: './env'
})

connectDB()





















/*
import express from "express"
const app = express()

;(async () => {
    try {
       await mongoose.connect(`{process.env.MONGODB_URL}/${DB_NAME}`)
       app.on("error", () => {
        console.log("ERRR: ", error);
        throw error
       })

       app.listen(process.env.PORT, () => {
        console.log(`App is listening on port ${process.env.PORT}`)
       })
    } catch (error) {
        console.error("ERROR:", error)
    }
})()  //ife execute the funtion immediately

*/