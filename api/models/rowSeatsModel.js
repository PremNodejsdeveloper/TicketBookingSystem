const mongoose = require('mongoose');

// Setting up Schema 
const rowSeatsSchema = mongoose.Schema({
   
    cinemaHallId: {
        type : Number,
        required: false
    },
    rowNumbers: { 
        type : Number,
        required: false
    },
    seatCount: {
        type: Number,
        required: true
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

let RowSeats= mongoose.model("RowSeats", rowSeatsSchema);