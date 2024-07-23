
import connectDB from './db/index.js';
import {app} from './app.js';

 

connectDB().then(()=>{
    app.listen(process.env.PORT || 4000 ,()=>{
        console.log(`server is running port ${process.env.PORT}`);
    })
}).catch((err)=>{
    console.log("Mongo db Failed !!!" , err)
})

/*
const app = express();
(async()=>{
    try{
      await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
      app.on("error" , (err)=>{
        console.log("Error: " , err)
        throw err
      })
      app.listen(process.env.PORT , ()=>{
        console.log(`App listening on port ${process.env.PORT}`);
      })
    }catch(err){
        console.error(err)
        throw err
    }
})()
    */ 
   