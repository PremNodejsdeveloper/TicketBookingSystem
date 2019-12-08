const mongoose = require('mongoose');

//Setting Up Schema
const bookTicketSchema = mongoose.Schema({

    noOfTicketAvailable :{
        type : Number,
        required: false
    },
    movieName: {
        type : String,
        require : false
    },
    ShowNo :{
        type :String,
        require : false
    },
    Date: {
        type : Date ,
        required : false
    },
    Time :{
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