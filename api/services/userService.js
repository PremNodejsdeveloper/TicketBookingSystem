let Users       =  require('../models/usersModel');
let movie       =  require('../models/movieModel');
let movieShows  =  require('../models/movieShowsModel');
let verifyEmail =  require('../utils/verifyemail');
let bookTicket  =  require('../models/bookTicketModel');
let seatStatus  =  require('../models/refSeatStatus');
let bookPerformSeats  = require('../models/bookTicketModel');
let performanceNumber = require('../models/performanceNumber');
let buildResponse     = require('../utils/responseFormatter');
let validateUserData  = require('../utils/validateUserData');



module.exports = {

    signUp: async function (userDTO) {
        try {
            let customeResponse

            let validResult = validateUserData.validate(userDTO);
            if (validResult.firstName === true && validResult.lastName === true
                && validResult.phone === true && validResult.email === true) {
                let existingUser = await Users.findUserByEmail(userDTO.email);
                let existingMobileNo = await Users.findUserByPhone(userDTO.phone);

                if (Object.keys(existingUser).length != 0) {
                    customeResponse = buildResponse.errorResponse(403, "user email already exists");
                    return customeResponse;

                } else if (Object.keys(existingMobileNo).length != 0) {
                    customeResponse = buildResponse.errorResponse(403, "user mobile no already exists");
                    return customeResponse;

                } else {
                    // calling userModel methods to insert the data in database
                    let userRecord = await Users.createUser(userDTO);
                    customeResponse = buildResponse.successResponse(200, "User Successfully regiested to db", userRecord);
                    return customeResponse;
                }
            } else {
                return buildResponse.errorResponse(400, "inputs are not valid input");
            }

        } catch (error) {
            customeResponse = buildResponse.errorResponse(500, "Some Exception Occured", error.message);
            return customeResponse;
        }

    },

    //login service api
    login: async function (userDTO) {
        try {
            let customeResponse

            let validResult = verifyEmail.velidateEmail(userDTO);
            if (validResult == true) {
                let existingUser = await Users.findUserByEmail(userDTO.email);

                if (Object.keys(existingUser).length != 0) {
                    if (existingUser[0].password === userDTO.password) {
                        customeResponse = buildResponse.successResponse(200, "successfully logged in", existingUser);
                        return customeResponse;
                    } else {
                        customeResponse = buildResponse.errorResponse(400, "either email or password is incorrect");
                        return customeResponse;
                    }
                } else {
                    customeResponse = buildResponse.errorResponse(404, "User not found with Email ");
                    return customeResponse;
                }
            } else {
                return buildResponse.errorResponse(400, "inputs are not valid input");
            }

        } catch (error) {
            customeResponse = buildResponse.errorResponse(500, "Some Exception Occured", error.message);
            return customeResponse;
        }
    },

    getAllMovies : async function(){
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

    searchForMovies : async function(searchParams){
        try{
            let customeResponse
            //let result = await movieShows.findShowsByTime(searchParams.showTime);
            let result = await movieShows.findShowsByDate(searchParams.showingFromDate);
            //console.log("result is ", result);
            if(Object.keys(result).length!=0){
               customeResponse = buildResponse.successResponse(200,"movie record fetched succefully",result);
               return customeResponse;
            }
            customeResponse = buildResponse.errorResponse(404,"movie record not found",result);
            return customeResponse;
           
         }catch(error){
            console.log("error occured during searching MovieRecord =>",error);
            customeResponse = buildResponse.errorResponse(500,"some error occured");
            return customeResponse;
         }
    },


    bookTicket : async function(bookingDetail){
        try{
            let customeResponse;
            let refSeatStatus;
            let finalResult = {};
            let savedBooking = await bookTicket.bookNewTicket(bookingDetail);
            console.log("saved Booking  is ", savedBooking);
            if(Object.keys(savedBooking).length!=0){
            
               refSeatStatus = await seatStatus.updateSeatStatus(bookingDetail)
               
               finalResult.savedBooking=savedBooking;
               finalResult.refSeatStatus=refSeatStatus;
               customeResponse = buildResponse.successResponse(200,"Ticket Booked succefully",finalResult);
               return customeResponse;
            }else{
                customeResponse = buildResponse.errorResponse(400,"Ticket not booked ",finalResult);
                return customeResponse;
            }           
         }catch(error){
            console.log("error occured during BookTicket =>",error);
            customeResponse = buildResponse.errorResponse(500,"some error occured");
            return customeResponse;
        }
    },

    performanceNumber : async function(PeformData){
        try{
            let customeResponse
            let savedPerformance = await performanceNumber.addNewPerformance();
            console.log("saved performance is ", savedPerformance);
            if(Object.keys(savedPerformance).length!=0){
               customeResponse = buildResponse.successResponse(200,"performance number added succefully",savedPerformance);
               return customeResponse;
            }else{
                customeResponse = buildResponse.errorResponse(500,"perfromance number not added ",savedPerformance);
                return customeResponse;
            }           
         }catch(error){
            console.log("error occured during BookTicket =>",error);
            customeResponse = buildResponse.errorResponse(500,"some error occured");
            return customeResponse;
        }
    }
  
}