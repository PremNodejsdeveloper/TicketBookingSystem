const mongoose = require('mongoose');
const Schema   = mongoose.Schema
const bookTicketSchema = new Schema({

    customerId :{
        type : Schema.Types.ObjectId,
        ref  :'Users',
        required: true
    },
    movieShowId: {
        type : Schema.Types.ObjectId,
        ref  : 'Movie',
        require : true
    },
    bookingForDate :{
        type :Date,
        require : true
    },
    bookingMadeDate: {
        type : Date ,
        required : true
    },
    bookingSeatCount :{
        type : Number,
        required : true
    },
    createdAt: {
        type:Date
    },
    updatedAt: {
        type:Date,
        default:Date.now
    }
});

const BookTicket = mongoose.model("BookTicket",bookTicketSchema);



async function bookNewTicket(movieTicket){

    console.log("movieTicket ",movieTicket);
    let newBookTicket  = new BookTicket({
        customerId       : movieTicket.customerId,
        movieShowId      : movieTicket.movieShowId,
        bookingForDate   : movieTicket.bookingForDate,
        bookingSeatCount : movieTicket.noOfTicket,
        bookingMadeDate  : Date.now(),
        createdAt        : Date.now()
       });
        
       try{
        let savedTicket= await newBookTicket.save();
        return savedTicket;
       }catch(err){
        console.log("error occured during inserting new Ticket ",err);
        return err;
       } 
}


 module.exports = {
     bookNewTicket
 }