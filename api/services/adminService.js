let movie = require('../models/movieModel');
let state = require('../models/stateModel');
let city = require('../models/cityModel');
let buildResponse = require('../utils/responseFormatter');

module.exports ={

    addMovieRecord : async function(movieRecord){
        try{
           let customeResponse
           let isMovieExists= await movie.findMovieByName(movieRecord);
           
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
         //console.log("movie Record => ", movieRecord);
         let customeResponse
         let movieExist = await movie.findMovieById(movieRecord.id);
         if(movieExist){
            // try{
            //    let result = await movie.updateMovieRecord(movieRecord);
            //    console.log("result is =>", result);
            //    customeResponse = buildResponse.successResponse(
            //                      200,"movie record updated succefully",result);
            //    return customeResponse;
            // }
            // catch(err){
            //    console.log("error occured during updateMovieRecord =>",err);
            //          customeResponse = buildResponse.errorResponse(500,"some error occured");
            //          return customeResponse;
            // }
            let result = await movie.updateMovieRecord(movieRecord);
            if(result.n===1 && result.nModified===1 && result.ok ===1){
               customeResponse = buildResponse.successResponse(
                                 200,"movie record updated succefully",result);
               return customeResponse;
            }else{
                  console.log("error occured during updateMovieRecord =>",error);
                  customeResponse = buildResponse.errorResponse(500,"some error occured");
                  return customeResponse;
            }
          
         }else{
            customeResponse = buildResponse.errorResponse(404,"movie not found",result);
            return customeResponse;
         }
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
    },

    getAllMovieRecord : async function(){
      try{
         let customeResponse
         let result = await movie.findAllMovies();
         if(result){
            customeResponse = buildResponse.successResponse(200,"movie record fetched succefully",result);
            return customeResponse;
         }
         customeResponse = buildResponse.successResponse(404,"movie record not found",result);
         return customeResponse;
        
      }catch(error){
         console.log("error occured during fetching MovieRecord =>",error);
         customeResponse = buildResponse.errorResponse(500,"some error occured");
         return customeResponse;
      }
    },

    addStateRecord : async function(stateRecord){
      try{
         let customeResponse
         let isStateExists= await state.findStateByName(stateRecord.stateName);
         
         if(Object.keys(isStateExists).length==0){
          let result = await state.addNewState(stateRecord.stateName);
          customeResponse = buildResponse.successResponse(200,"new state record added succefully",result);
          return customeResponse;
         }
         customeResponse = buildResponse.errorResponse(400,"state record exists in our db");
         return customeResponse;
      }catch(error){
         console.log("error occured during addMovieRecord =>",error);
         customeResponse = buildResponse.errorResponse(500,"some error occured");
         return customeResponse;
      }
      
    },
    
    addCityRecord : async function(cityRecord){
      try{
         let customeResponse
         let isStateExists= await state.findStateByName(cityRecord.stateName);
         //console.log("isStateExists==>",isStateExists[0]);
         if(Object.keys(isStateExists).length==0){
            customeResponse = buildResponse.errorResponse(400,"state record not exists in our db");
            return customeResponse;
         }else{
             let isCityExists = await city.cityByName(cityRecord.cityName);
             if(Object.keys(isCityExists).length==0){
               let stateData  = isStateExists[0];
               let stateId    = stateData.id;
               let cityName   = cityRecord.cityName;
               let result     =  await city.addNewCity(stateId,cityName);
               customeResponse = buildResponse.successResponse(200,"new city record added succefully",result);
               return customeResponse;
             }else{
                customeResponse = buildResponse.errorResponse(400,"City Name already exists");
                return customeResponse;
             }
             
             
         }
        
      }catch(error){
         console.log("error occured during addNewCity Record =>",error);
         customeResponse = buildResponse.errorResponse(500,"some error occured");
         return customeResponse;
      }
      
   },

    getCityRecord : async function(cName){
      try{
         let customeResponse
         let isCityExists= await city.cityByName(cName);
         //console.log("isCityExists==>",isCityExists[0]);
         if(Object.keys(isCityExists).length==0){
            customeResponse = buildResponse.errorResponse(400,"city with state not found");
            return customeResponse;
         }else{
             customeResponse = buildResponse.successResponse(200,"city recored fetched successfully",isCityExists[0]);
             return customeResponse;
         }
        
      }catch(error){
         console.log("error occured during fetch City Record =>",error);
         customeResponse = buildResponse.errorResponse(500,"some error occured");
         return customeResponse;
      }
      
   },

}