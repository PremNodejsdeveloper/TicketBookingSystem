const mongoose = require('mongoose');

// Setting up Schema 
const citySchema = mongoose.Schema({
   
    cityName: {
        type : String,
        required: false
    },
    sateId: { 
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

let City= mongoose.model("City", citySchema);