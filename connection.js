import mongoose from "mongoose";
import dotenv from "dotenv";

const env = dotenv.config().parsed;

const connection = () => {
    mongoose.connect(`${env.MONGODB_URI}/${env.MONGODB_NAME}`);

    mongoose.set('strictQuery', true)
    mongoose.set('strictQuery', false)
    const connection = mongoose.connection
    connection.on('error', console.error.bind(console, 'connection error'))
    connection.once('open', () =>{
    console.log(`Connected to mongoDB, Database Name : ${env.MONGODB_NAME}`)
    })
}

export default connection