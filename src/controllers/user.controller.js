import {asyncHandler} from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async(req,res)=>{
      try{
        res.status(200).json({
            message:"ok",
        }) 
      }catch(err){
        console.log(err)
        res.status(500).json({
            message :'An error  occurred '
        })
      }
})

export {registerUser}