const mongoose = require('mongoose');
let Schema = mongoose.Schema;
 
const cinemaTheaterSchema = new Schema({
   
    cinemaName: {
        type : String,
        required: false
    },
    address: { 
        type : Schema.type.ObjectId,
        ref  : 'CinemaAddress',
        required: true
    },
    rating: {
        type:Number,
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

let CinemaTheater= mongoose.model("CinemaTheater", cinemaTheaterSchema);

async function addCinemaTheater(cinemaData){
    let newCinemaTheater = new CinemaTheater({
        cinemaName: cinemaData.cinemaName,
        address   : cinemaData.address
    })
    try{
        let savedCinameTheater= await newCinemaTheater.save();
        return savedCinameTheater;
       }catch(err){
        console.log(err);
        return err;
       }     
}

module.exports ={
    addCinemaTheater
}