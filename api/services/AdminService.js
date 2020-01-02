let movie = require('../models/movieModel');
let state = require('../models/stateModel');
let city = require('../models/cityModel');
let cinema = require('../models/cinemaTheaterModel');
let cinemaAddress = require('../models/cinemaAddressModel');
let cinemaHall = require('../models/cinemaHallModel');
let rowSeats   = require('../models/rowSeatsModel');
let refSeatStatus   = require('../models/refSeatStatus');
let movieShows   = require('../models/movieShowsModel');
let buildResponse = require('../utils/responseFormatter');
let moment        = require('moment');

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

    addCinemaTheater : async function(cTheater){
      try{
         let customeResponse
         let isCinemaExists= await cinema.findCinemaByName(cTheater.cinemaName);
         
         if(Object.keys(isCinemaExists).length!=0){
            customeResponse = buildResponse.errorResponse(400,"Cinema record exists in our db");
            return customeResponse;
         }else{            
             let addCAddress = await cinemaAddress.addCinemaAddress(cTheater.cinemaAddress);
             //console.log("addCAddress----->",addCAddress);
            if(Object.keys(addCAddress).length!=0){
               let cAddressData = addCAddress;
               //console.log("cAddressData ==> ",cAddressData);
               cTheater.cinemaAddress = cAddressData._id;
               
               let result     =  await cinema.addCinemaTheater(cTheater);
               customeResponse = buildResponse.successResponse(200,"new Cinema record added succefully",result);
               return customeResponse;
             }
         }
        
      }catch(error){
         console.log("error occured during addCinema Record =>",error);
         customeResponse = buildResponse.errorResponse(500,"some error occured");
         return customeResponse;
      }
   },


   addCinemaHall : async function(cHallData){
      try{
         let customeResponse
         let isCinemaHallExists= await cinemaHall.findCinemaHallByName(cHallData.hallName);
         
         if(Object.keys(isCinemaHallExists).length!=0){
            customeResponse = buildResponse.errorResponse(400,"CinemaHall record exists in our db");
            return customeResponse;
         }else{
               let isCinemaExists = await cinema.findCinemaByName(cHallData.cinemaTheater);
               //console.log("isCinemaExists",isCinemaExists);
               if(Object.keys(isCinemaExists).length!=0){
                  cHallData.cinemaTheater= isCinemaExists[0]._id; 
                  let result         = await cinemaHall.addCinemaHall(cHallData);
                  customeResponse    = buildResponse.successResponse(200,"new CinemaHall record added succefully",result);
                  return customeResponse;  
               }else{
                  customeResponse = buildResponse.errorResponse(400,"CinemaTheater record not exists in our db");
                  return customeResponse;
               }                          
         }
        
      }catch(error){
         console.log("error occured during addCinemaHall Record =>",error);
         customeResponse = buildResponse.errorResponse(500,"some error occured");
         return customeResponse;
      }
      
   },

   addSeatsByHall: async function (cHallSeates) {
      try {
         let customeResponse
         let isCinemaHallExists = await cinemaHall.findCinemaHallById(cHallSeates.cHallId);
         //console.log("isCinemaHallExist",isCinemaHallExists);
         if (Object.keys(isCinemaHallExists).length == 0) {
            customeResponse = buildResponse.errorResponse(400, "CinemaHall record not exists in our db");
            return customeResponse;
         } else {
            let result = await rowSeats.addSeats(cHallSeates);
            customeResponse = buildResponse.successResponse(200, "new CinemaHall seats record added succefully", result);
            return customeResponse;

         }

      } catch (error) {
         console.log("error occured during addCinemaHall Record =>", error);
         customeResponse = buildResponse.errorResponse(500, "some error occured");
         return customeResponse;
      }

   },

   addSeatsByRow: async function (cHallSeats) {
      try {
         let customeResponse
         let isSeatRowExists = await rowSeats.findRowOfSeatById(cHallSeats.rowSeatId);
         //console.log("isSeatRowExist",isSeatRowExists );
         if (Object.keys(isSeatRowExists).length == 0) {
            customeResponse = buildResponse.errorResponse(400, "Seat Row no record not exists in our db");
            return customeResponse;
         } else {
            let result = await refSeatStatus.addSeatsByRow(cHallSeats);
            customeResponse = buildResponse.successResponse(200, " new seats record added succefully", result);
            return customeResponse;

         }

      } catch (error) {
         console.log("error occured during add SeatsByRow Record =>", error);
         customeResponse = buildResponse.errorResponse(500, "some error occured");
         return customeResponse;
      }

   },

   addShowTimeToHall: async function (showData) {
      try {
         let customeResponse
         let isShowTimeExists = await movieShows.findShowTime(showData.showTime);
         console.log("isShowTimeExist",isShowTimeExists );
         if (Object.keys(isShowTimeExists).length != 0) {
            customeResponse = buildResponse.errorResponse(400, "show time exists in our db");
            return customeResponse;
         } else {
            let result = await movieShows.addNewShowTime(showData);
            customeResponse = buildResponse.successResponse(200, " new showTime added succefully", result);
            return customeResponse;
         }
      } catch (error) {
         console.log("error occured during add showtime =>", error);
         customeResponse = buildResponse.errorResponse(500, "some error occured");
         return customeResponse;
      }

   },


   addNewMovieShow: async function (showData) {
      try {
         //console.log("showData",showData);
         let customeResponse
         let isShowTimeExists = await movieShows.findShowTime(showData.showTime);
         //console.log("isShowTimeExist",isShowTimeExists );
         if (Object.keys(isShowTimeExists).length == 0) {
            customeResponse = buildResponse.errorResponse(400, "show time not exists in our db");
            return customeResponse;
         } else {
            let result = await movieShows.addNewMovieShow(showData);
            result.showingFromDate = moment(result.showingFromDate).format('DD/MM/YYYY');
            result.showingToDate   = moment(result.showingToDate).format('DD/MM/YYYY');
            console.log(result.showingToDate);
            let newResult={};
            newResult.movieId         = result.movieId;
            newResult.cinemaHallId    = result.cinemaHallId;
            newResult.showTime        = result.showTime;
            newResult.showingFromDate = moment(result.showingFromDate).format('DD/MM/YYYY');
            newResult.showingToDate   = moment(result.showingToDate).format('DD/MM/YYYY');
            customeResponse = buildResponse.successResponse(200, " new showTime added succefully", newResult);
            return customeResponse;
         }
      } catch (error) {
         console.log("error occured during add showtime =>", error);
         customeResponse = buildResponse.errorResponse(500, "some error occured");
         return customeResponse;
      }

   },

}