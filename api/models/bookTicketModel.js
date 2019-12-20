const mongoose = require('mongoose');

//Setting Up Schema
const bookTicketSchema = mongoose.Schema({

    customerId :{
        type : Number,
        required: false
    },
    movieShowId: {
        type : String,
        require : false
    },
    bookingForDate :{
        type :Date,
        require : false
    },
    bookingMadeDate: {
        type : Date ,
        required : false
    },
    bookingSeatCount :{
        type : Date,
        required : false
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

const bookTicketModel = mongoose.model("BookTicket",bookTicketSchema);

 function updateSeatsAvaliable(){

 }

 module.exports = {
     updateSeatsAvaliable
 }