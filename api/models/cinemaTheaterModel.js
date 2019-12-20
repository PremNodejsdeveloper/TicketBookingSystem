const mongoose = require('mongoose');

// Setting up Schema 
const cinemaTheaterSchema = mongoose.Schema({
   
    cinemaName: {
        type : String,
        required: false
    },
    address: { 
        type : String,
        required: false
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