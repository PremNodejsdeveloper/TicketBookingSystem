const mongoose = require('mongoose');

// Setting up Schema 
const cinemaHallSchema = mongoose.Schema({
   
    cinemaTheater: {
        type : Number,
        required: false
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