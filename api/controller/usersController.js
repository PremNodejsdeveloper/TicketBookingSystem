const userService = require('../services/userService');

module.exports = {

    signUp : async function(request, response,next){
         try{
            let userDTO= request.body;
            let result= await userService.signUp(userDTO);
            response.status(result.code).json(result);
         }catch(error){
            console.log("error occured during signUp =>",error);
            response.status(500).json("some error occured");
         }
         
    },

    login : async function(request, response, next){
        try{
            let userDTO= request.body;
            let result= await userService.login(userDTO);
            response.status(result.code).json(result);
         }catch(error){
             console.log("error occured during login =>",error);
            response.status(500).json("some error occured");
         }
    },

    getAllMovies : async function(request, response){
      try{
         //let movieRecord = request.body;
         let result  = await userService.getAllMovies();
         response.status(result.code).json(result);
      }catch(error){
         console.log("error occured during fetching Movie Record =>",error);
         response.status(500).json("some error occured");
      } 
  }

 
    // searchForMovie()
    // bookTicket()
    // makePayment()
    // cancleTicket()
    
}