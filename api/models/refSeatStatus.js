const mongoose = require('mongoose');

// Setting up Schema 
const seatStatusSchema = mongoose.Schema({
   
    //this is (pk)
    seatStatusCode: {
        type : Schema.type.ObjectId
        //required: false
    },
    rowSeatId: {
        type:Schema.type.ObjectId, ref:'RowSeats'
    },
    seatNumber: {
        type:Number
    },
    seatStatus: { 
        type : String,
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

let SeatStatus= mongoose.model("SeatStatus", seatStatusSchema);

async function refSeatStatus(seatsData){
    let newRefSeatStatus = new SeatStatus({
        rowSeatId  : seatData.rSeatId,
        seatNumber : seatData.sNumber,
        seatStatus : seatData.sStatus,
        
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