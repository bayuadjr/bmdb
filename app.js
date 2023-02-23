import express from "express";
import apiRouter from "./routes/api.js";
import mysql from "mysql";
import connection from "./connection.js";
import dotenv from "dotenv";


const env = dotenv.config().parsed;

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', apiRouter)
//catch 404
app.use((req, res) => {
    res.status(404).json({massage: '404_NOT_FOUND'})
})

//Mongodb connection
connection()


app.listen(env.APP_PORT, () => {
    console.log(`Server started on Port ${env.APP_PORT}`)
})