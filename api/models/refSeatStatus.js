const mongoose = require('mongoose');

// Setting up Schema 
const seatStatusSchema = mongoose.Schema({
   
    //this is (pk)
    seatStatusCode: {
        type : String,
        required: false
    },
    rowSeatId: {
        type:Number
    },
    seatStatus: { 
        type : String,
        required: false
    },
    seatNumber: {
        type:Number
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

let SeatStatus= mongoose.model("SeatStatus", seatStatusSchema);