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

async function addSeatsByRow(seatData){
    let listOfSeats=[];
    for(let i=1;i<=seatData.noOfSeats;i++){
        listOfSeats.push({
        rowSeatId  : seatData.rowSeatId,
        seatNumber : i,
        createdAt  : Date.now()
        })
    }
    //console.log("list of seats are ",listOfSeats);
    try{
        let savedSeatStatus= await SeatStatus.insertMany(listOfSeats);
        return savedSeatStatus;
        //return listOfSeats;
       }catch(err){
        console.log("error during adding to row by row ",err);
        return err;
       }     
}

module.exports ={
    addSeatsByRow
}