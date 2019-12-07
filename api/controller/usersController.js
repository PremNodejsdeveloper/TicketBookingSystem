const userService = require('../services/userService');

module.exports = {

    signUp : async function(request, response,next){
         let userDTO= request.body;
         let result= await userService.signUp(userDTO);
         response.send(result);
         
    },

    login : function(request, response, next){

        response.status(200).json("this is login api");
    }

    
}