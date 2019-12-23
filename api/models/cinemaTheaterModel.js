const mongoose = require('mongoose');
let Schema = mongoose.Schema;
 
const cinemaTheaterSchema = new Schema({
   
    cinemaName: {
        type : String,
        required: false
    },
    address: { 
        type : Schema.Types.ObjectId,
        ref  : 'CinemaAddress',
        required: true
    },
    rating: {
        type:Number,
        required: false
    },
    createdAt: {
        type:Date
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
        address   : cinemaData.cinemaAddress,
        createdAt : Date.now
    })
    try{
        let savedCinameTheater= await newCinemaTheater.save();
        return savedCinameTheater;
       }catch(err){
        console.log(err);
        return err;
       }     
}

async function findCinemaByName(ciName){
    try{
        let savedCinameTheater= await CinemaTheater.find({cinemaName:ciName});
        return savedCinameTheater;
       }catch(err){
        console.log(err);
        return err;
       }     
}

module.exports ={
    addCinemaTheater,
    findCinemaByName
}