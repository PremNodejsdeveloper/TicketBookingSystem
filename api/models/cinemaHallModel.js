const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const cinemaHallSchema = new Schema({
   
    hallName: {
        type:String,
        required:true
    },
    seatCapacity: { 
        type : Number,
        required: false
    },
    cinemaTheater: {
        type : Schema.Types.ObjectId,
        ref  : 'CinemaTheater',
        required: true
    },
    createdAt: {
        type:Date
    },
    updatedAt: {
        type:Date,
        default:Date.now
    }
});

let CinemaHall= mongoose.model("CinemaHall", cinemaHallSchema);

async function addCinemaHall(cHallData){
    let newCinemaHall = new CinemaHall({
        hallName     : cHallData.hallName,
        seatCapacity : cHallData.seatCapacity,
        cinemaTheater: cHallData.cinemaTheater,
        createdAt    : Date.now()
        
    })
    try{
        let savedCinameHall= await newCinemaHall.save();
        return savedCinameHall;
       }catch(err){
        console.log(err);
        return err;
       }     
}

async function findCinemaHallByName(cHallName){
    try{
        let savedCinameHall= await CinemaHall.find({hallName:cHallName});
        return savedCinameHall;
       }catch(err){
        console.log("error during fetching cinemaHall Record",err);
        return err;
       }     
}

async function findCinemaHallById(cHallId){
    try{
        let isCinameHall= await CinemaHall.findById({_id:cHallId});
        return isCinameHall;
       }catch(err){
        console.log("error during fetching cinemaHall Record by Id ",err);
        return err;
       }     
}

module.exports ={
    addCinemaHall,
    findCinemaHallByName,
    findCinemaHallById
}