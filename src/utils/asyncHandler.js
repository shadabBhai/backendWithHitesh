const asyncHandler =(requestHandler)=>{
   return  (req,res,next)=>{
         Promise.resolve(requestHandler(req,res,next))
            .catch((err)=> next(err));
    }
}

export {asyncHandler}


//try catch approch 
// const asyncHandler = (fn)=> asyn (req,res,next) =>{
//     try{
//         await fn(req,res,next)
//     }catch(error){
//         console.error(error)
//         res.status(500).json({sucessL: false ,error:"Server Error"})
//     }
// }