const mongoose = require('mongoose');
let Schema = mongoose.Schema;
 
const cinemaAddressSchema = new Schema({
   
    venue: { 
        type : String,
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

let CinemaAddress= mongoose.model("CinemaAddress", cinemaAddressSchema);


async function addCinemaAddress(cAddress){
    //console.log("cAddress==> ",cAddress);
    let newCinemaAddress = new CinemaAddress({
        venue: cAddress,
        createdAt: Date.now
    })
    try{
        let savedAddress= await newCinemaAddress.save();
        //console.log("SavedAddress ",savedAddress);
        return savedAddress;
       }catch(err){
        console.log("error in CinemaAddress ",err);
        return err;
       }     
}

module.exports ={
    addCinemaAddress
}