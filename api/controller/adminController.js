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
    }


   }