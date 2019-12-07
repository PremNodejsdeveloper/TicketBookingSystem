const Users = require('../models/users');
let buildResponse = require('../utils/responseFormatter');
let validateUserData = require('../utils/validateUserData');


module.exports ={

    signUp: async function (userDTO) {
        try{
            let customeResponse

            let validResult = validateUserData.validate(userDTO);
            if(validResult.firstName===true && validResult.LastName===true 
                && validResult.phone===true && validResult.email===true ){
                let existingUser     = await Users.findUserByEmail(userDTO.email);
                let existingMobileNo = await Users.findUserByPhone(userDTO.phone);

                if (Object.keys(existingUser).length!=0) {
                    customeResponse=buildResponse.errorResponse(403,"user email already exists");
                    return customeResponse;
                   
                }else if (existingMobileNo){
                    customeResponse=buildResponse.errorResponse(403,"user mobile no already exists");
                    return customeResponse;

                } else {                  
                    // calling userModel methods to insert the data in database
                    let userRecord = await Users.createUser(userDTO);
                    customeResponse = buildResponse.successResponse(200,"User Successfully regiested to db",userRecord);
                    return customeResponse;
                }
            }else{
                return buildResponse.errorResponse(400,"inputs are not valid input");
            }
              
        }catch(error){
            customeResponse=buildResponse.errorResponse(500,"Some Exception Occured",error.message);
            return customeResponse;
        }
        
    },

    //login service api
    login : async function(){

    }
}