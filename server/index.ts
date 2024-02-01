import express from "express"
import bodyParser from "body-parser"
import dotenv from "dotenv";
import cors from "cors"
import ApiyRouter from "./routes/getApi.routes";
dotenv.config()
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(cors())
app.use(ApiyRouter)
const PORT:number=7777
app.listen(PORT,()=>{
    console.log("Server is running on port 777");
})
