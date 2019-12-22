const mongoose = require('mongoose');
let Schema = mongoose.Schema;
 
const cinemaAddressSchema = Schema({
   
    venue: { 
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

let CinemaAddress= mongoose.model("CinemaAddress", cinemaAddressSchema);


async function addCinemaAddress(cAddress){
    let newCinemaAddress = new CinemaAddress({
        venue: cAddress
    })
    try{
        let savedAddress= await newCinemaAddress.save();
        return savedAddress;
       }catch(err){
        console.log(err);
        return err;
       }     
}

module.exports ={
    addCinemaAddress
}