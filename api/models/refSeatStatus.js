const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const seatStatusSchema = new Schema({
   
    //this is (pk)
    seatStatusCode: {
        type : Schema.Types.ObjectId,
    },
    rowSeatId: {
        type:Schema.Types.ObjectId, 
        ref:'RowSeats',
        required: true
    },
    seatNumber: {
        type:Number
    },
    seatStatus: { 
        type : String,
        default:'NOT_BOOKED',
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

let SeatStatus= mongoose.model("SeatStatus", seatStatusSchema);

async function refSeatStatus(seatsData){
    let newRefSeatStatus = new SeatStatus({
        rowSeatId  : seatData.rSeatId,
        seatNumber : seatData.sNumber,
        seatStatus : seatData.sStatus,
        createdAt  : Date.now()
        
    })
    try{
        let savedSeatStatus= await newRefSeatStatus.save();
        return savedSeatStatus;
       }catch(err){
        console.log(err);
        return err;
       }     
}

module.exports ={
    refSeatStatus
}