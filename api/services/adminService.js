let movie = require('../models/movieModel');
let buildResponse = require('../utils/responseFormatter');

module.exports ={

    addMovieRecord : async function(movieRecord){
        try{
           let customeResponse
           let isMovieExists= await movie.findByMovieName(movieRecord);
           
           if(Object.keys(isMovieExists).length==0){
            let result = await movie.addNewMovie(movieRecord);
            customeResponse = buildResponse.successResponse(200,"new movie record added succefully",result);
            return customeResponse;
           }
           customeResponse = buildResponse.errorResponse(403,"movie record exists in our db");
           return customeResponse;
        }catch(error){
           console.log("error occured during addMovieRecord =>",error);
           customeResponse = buildResponse.errorResponse(500,"some error occured");
           return customeResponse;
        }
        
    },

    updateMovieRecord : async function(movieRecord){
      try{
         let customeResponse
         let result = await movie.updateMovieRecord(movieRecord);
         customeResponse = buildResponse.successResponse(200,"movie record updated succefully",result);
         return customeResponse;
      }catch(error){
         console.log("error occured during updateMovieRecord =>",error);
         customeResponse = buildResponse.errorResponse(500,"some error occured");
         return customeResponse;
      }
        
    },

    deleteMovieRecord : async function(movieRecord){
      try{
         let customeResponse
         let result = await movie.deleteMovieRecord(movieRecord);
         if(result){
            customeResponse = buildResponse.successResponse(200,"movie record deleted succefully",result);
            return customeResponse;
         }
         customeResponse = buildResponse.successResponse(404,"movie record not found",result);
         return customeResponse;
        
      }catch(error){
         console.log("error occured during deleteMovieRecord =>",error);
         customeResponse = buildResponse.errorResponse(500,"some error occured");
         return customeResponse;
      }
        
    }


   }