import {asyncHandler} from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import {User} from '../models/user.model.js'


const registerUser = asyncHandler(async(req,res)=>{
//get user details from  frontend
//validation - not empty
//check if user already exists : username , email
// check for images , check for avatar
//upload them to cloudinary , avatar
// create user object - create entry in  db 
// remove  password and  refresh token field from response
// check  for user creation 
//return  res

      {
       const {fullName  , email , userName , password}  = req.body
       if (
            [fullName , email , userName , password].some((field)=>
            field?.trim() === "")
        ) {
        throw new ApiError(400 , "All filed are  required")
       }
       const existedUser = User.findOne(
            {
                  $or: [{userName} , {email}]
            }
       )
       if(existedUser){
            throw new ApiError( 409 , "User with email or user is exists")
       }

       req.files?.avatar[0]?.path


      }

      // }catch(err){
      //   console.log(err)
      //   res.status(500).json({
      //       message :'An error  occurred '
      //   })
      // }
})

export {registerUser}