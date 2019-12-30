const mongoose = require('mongoose');
const Schema  =  mongoose.Schema;
const bookedPerformSeats = new Schema({
   
    cinemaHallId: {
        type : Schema.Types.ObjectId,
        ref  : 'CinemaHall',
        required: true
    },
    rowNumber: { 
        type : Schema.Types.ObjectId,
        ref  : "RowSeats",
        required: true
    },
    seatNumber: {
        type : Schema.Types.ObjectId,
        ref  : "SeatStatus",
        required: true
    },
    performanceDate: {
        type: Date,
        required: true
    },
    performanceNumber: {
        type : Schema.Types.ObjectId,
        ref  : 'PerformanceNumber',
        required: true
    },
    bookTicketId: {
        type: Schema.Types.ObjectId,
        ref : 'BookTicket'
    },
    createdAt: {
        type:Date
    },
    updatedAt: {
        type:Date,
        default:Date.now
    }
});

let BookedPerformSeats = mongoose.model("BookedPerformanceSeats", bookedPerformSeats);


async function addBookedPerformance(performData){
    let bookedPerformSeats =  new BookedPerformSeats({
            cinemaHallId   :  performData.pStartTime,
            rowNumber      :  performData.pEndTime,
            seatNumber     :  performData.seatNumber,
            bookTicketId   :  performData.bookTicketId,
            performanceDate:  Date.now(),
            createdAt      :  Date.now()
       });
        
       try{
        let bPerformSeat= await bookedPerformSeats.save();
        return bPerformSeat;
       }catch(err){
        console.log("error during Saving booked Perform seats",err);
        return err;
       } 
}


module.exports = {
    addBookedPerformance
}