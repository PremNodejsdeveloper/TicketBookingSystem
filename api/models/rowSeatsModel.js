const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const rowSeatsSchema = new Schema({
   
    cinemaHall: {
        type : Schema.Types.ObjectId,
        ref:'CinemaHall',
        required: true
    },
    rowNumbers: { 
        type : String,
        required: false
    },
    seatCount: {
        type: Number,
        required: true
    },
    createdAt: {
        type:Date
    },
    updatedAt: {
        type:Date,
        default:Date.now
    }
});

let RowSeats= mongoose.model("RowSeats", rowSeatsSchema);

async function addSeats(seatData){
    let newRowSeats = new RowSeats({
        cinemaHall :  seatData.cHallId,
        rowNumbers :  seatData.rowNumber,
        seatCount  :  seatData.seatCount,
        createdAt  :  Date.now()
        
    })
    try{
        let savedRowSeats= await newRowSeats.save();
        return savedRowSeats;
       }catch(err){
        console.log("error during saving seats data to hall ",err);
        return err;
       }     
}


async function findRowOfSeatById(rowSeatId){
    try{
        let savedRowSeats= await RowSeats.findById({_id:rowSeatId});
        return savedRowSeats;
       }catch(err){
        console.log("error during fetching seats data ",err);
        return err;
       }     
}

module.exports ={
    addSeats,
    findRowOfSeatById
}