const mongoose = require('mongoose');

// Setting up Schema 
const stateSchema = mongoose.Schema({
   
    stateName: {
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

let State= mongoose.model("State", stateSchema);