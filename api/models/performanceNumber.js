const mongoose = require('mongoose');

// Setting up Schema 
const performanceNumber = mongoose.Schema({
   
    performanceStartTime: {
        type : Date,
        required: false
    },
    performanceEndTime: { 
        type : Date,
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

let PerformanceNumber = mongoose.model("PerformanceNumber", performanceNumber);