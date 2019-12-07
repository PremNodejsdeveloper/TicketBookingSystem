const userService = require('../services/userService');

module.exports = {

    signUp : async function(request, response,next){
         try{
            let userDTO= request.body;
            let result= await userService.signUp(userDTO);
            response.status(result.code).json(result);
         }catch(error){
             console.log("error in userController =>",error);
            response.status(500).json("some error occured");
         }
         
    },

    login : function(request, response, next){

        response.status(200).json("this is login api");
    }

    
}