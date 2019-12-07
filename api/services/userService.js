const Users = require('../models/users');
let buildResponse = require('../utils/responseFormatter');


module.exports ={

    signUp: async function (userDTO) {
        try{
            let customeResponse
            let existingUser =  Users.find({email:userDTO.email})
            // .exec((error,data)=>{
            //     if(error)
            //     return error
            //     else{
              console.log("existingUser==>",existingUser);
              
            // //console.log("existingUser==>",existingUser);
            // console.log("data=>  ",data);
            //    return data;
            // if (existingUser) {
            //     customeResponse=buildResponse.errorResponse(402,"user already exists");
            //     return customeResponse;
            //     //return { status: 402, message: "user already exists" };
            // } else {
            //     // calling userModel methods to insert the data in database
            //     //let userRecord = await userModel.createUser(userDTO);
            //     return userRecord;
            // }
            // console.log( "data is ==> ",data);
            //         return data;
            //     }
            // });
            return existingUser;
            
        }catch(error){
             customeResponse=buildResponse.errorResponse(500,"Some Exception Occured");
        }
        
    },

    //login service api
    login : async function(){

    }
}