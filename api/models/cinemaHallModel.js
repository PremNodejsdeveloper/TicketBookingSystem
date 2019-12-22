const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const cinemaHallSchema = Schema({
   
    hallName: {
        type:String,
        required:true
    },
    cinemaTheater: {
        type : Schema.type.ObjectId,
        required: true
    },
    seatCapacity: { 
        type : Number,
        required: false
    },
    createdAt: {
        type:Date,
        default:Date.now
    },
    updatedAt: {
        type:Date,
        default:Date.now
    }
});

let CinemaHall= mongoose.model("CinemaHall", cinemaHallSchema);

async function addCinemaHall(cinemaData){
    let newCinemaHall = new CinemaHall({
        hallName :     cinemaData.hallName,
        cinemaTheater: cinemaData.cinemaTheater,
        seatCapacity : cinemaData.seatCapacity
        
    })
    try{
        let savedCinameHall= await newCinemaHall.save();
        return savedCinameHall;
       }catch(err){
        console.log(err);
        return err;
       }     
}

module.exports ={
    addCinemaHall
}