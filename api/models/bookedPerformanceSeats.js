const mongoose = require('mongoose');

// Setting up Schema 
const bookedPerformanceSeats = mongoose.Schema({
   
    cinemaHallId: {
        type : Number,
        required: false
    },
    rowNumber: { 
        type : Number,
        required: false
    },
    seatNumber: {
        type: Number,
        required: false
    },
    performanceDate: {
        type: Date,
        required: true
    },
    performanceNumber: {
        type:Number,
        required: false
    },
    bookTicketId: {
        type: Number
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

let BookedPerformanceSeats = mongoose.model("BookedPerformanceSeats", bookedPerformanceSeats);