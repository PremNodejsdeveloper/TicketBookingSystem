const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const rowSeatsSchema = Schema({
   
    cinemaHall: {
        type : Schema.type.ObjectId,ref:'CinemaHall',
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
        type:Date,
        default:Date.now
    },
    updatedAt: {
        type:Date,
        default:Date.now
    }
});

let RowSeats= mongoose.model("RowSeats", rowSeatsSchema);

async function addSeats(seatsData){
    let newRowSeats = new RowSeats({
        cinemaHall :  seatData.cHall,
        rowNumbers :  seatData.rNumber,
        seatCount  :  seatData.scount
        
    })
    try{
        let savedRowSeats= await newRowSeats.save();
        return savedRowSeats;
       }catch(err){
        console.log(err);
        return err;
       }     
}