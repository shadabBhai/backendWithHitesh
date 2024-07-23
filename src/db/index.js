import mongoose from 'mongoose';
import { DB_NAME } from '../constant.js';
import dotenv  from 'dotenv'
dotenv.config()


const connectDB = async ()=>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
            console.log(`\n MongoDB Connected: ${connectionInstance.connection.host}`)

    }catch(err){
        console.log("MONGODB connection error : " , err)
        process.exit(1)
    }
}

export default connectDB;