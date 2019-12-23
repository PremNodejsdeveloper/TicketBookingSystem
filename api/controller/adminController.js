let adminService = require('../services/adminService');
   
   // This is Admin Taks Area
   
   module.exports ={

    addMovieRecord : async function(request, response){
        try{
           let movieRecord= request.body;
           let result= await adminService.addMovieRecord(movieRecord);
           response.status(result.code).json(result);
        }catch(error){
           console.log("error occured during addMovieRecord =>",error);
           response.status(500).json("some error occured");
        }
        
    },

    updateMovieRecord : async function(request, response){
        try{
           let movieRecord= request.body;
           let result= await adminService.updateMovieRecord(movieRecord);
           response.status(result.code).json(result);
        }catch(error){
           console.log("error occured during updating a MovieRecord =>",error);
           response.status(500).json("some error occured");
        }
        
    },

    deleteMovieRecord : async function(request, response){
        try{
           let movieRecord = request.body;
           let result  = await adminService.deleteMovieRecord(movieRecord);
           response.status(result.code).json(result);
        }catch(error){
           console.log("error occured during deleting a Movie Record =>",error);
           response.status(500).json("some error occured");
        } 
    },

    getAllMovieRecords : async function(request, response){
      try{
         //let movieRecord = request.body;
         let result  = await adminService.getAllMovieRecord();
         response.status(result.code).json(result);
      }catch(error){
         console.log("error occured during fetching Movie Record =>",error);
         response.status(500).json("some error occured");
      } 
    },

    addStateRecord : async function(request, response){
   try{
      let stateRecord= request.body;
      let result= await adminService.addStateRecord(stateRecord);
      response.status(result.code).json(result);
   }catch(error){
      console.log("error occured during addStateRecord =>",error);
      response.status(500).json("some error occured");
   }   
    },

    addCityRecord: async function (request, response) {
         try {
            let cityRecord = request.body;
            let result = await adminService.addCityRecord(cityRecord);
            response.status(result.code).json(result);
         } catch (error) {
            console.log("error occured during addStateRecord =>", error);
            response.status(500).json("some error occured");
         }
    },

    getCityRecord: async function (request, response) {
      try {
         let cName = request.query.cityName;
         let result = await adminService.getCityRecord(cName);
         response.status(result.code).json(result);
      } catch (error) {
         console.log("error occured during addStateRecord =>", error);
         response.status(500).json("some error occured");
      }
    },

    addCinemaRecord: async function (request, response) {
      try {
         let cinemaTheater = request.body;
         let result = await adminService.addCinemaTheater(cinemaTheater);
         response.status(result.code).json(result);
      } catch (error) {
         console.log("error occured during addCinemaTheater =>", error);
         response.status(500).json("some error occured");
      }
     },

    addCinemaHallRecord: async function (request, response) {
      try {
         let cinemaHall = request.body;
         let result = await adminService.addCinemaHall(cinemaHall);
         response.status(result.code).json(result);
      } catch (error) {
         console.log("error occured during addCinemaHall  =>", error);
         response.status(500).json("some error occured");
      }
    },


    addSeatsRecord: async function (request, response) {
      try {
         let cHallSeates = request.body;
         let result = await adminService.addSeatsByHall(cHallSeates);
         response.status(result.code).json(result);
      } catch (error) {
         console.log("error occured during addCinemaHallSeats  =>", error);
         response.status(500).json("some error occured");
      }
    },

}