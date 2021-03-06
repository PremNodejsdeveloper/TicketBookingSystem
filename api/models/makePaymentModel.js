const mongoose = require('mongoose');

// Setting up Schema 
const makePaymentSchema = mongoose.Schema({
   
    bookTicketId: {
        type : Number,
        required: false
    },
    userId: { 
        type : Date,
        required: false
    },
    tranctionStatus: {
        type: String,
        required: false
    },
    tranctionDate: {
        type: Date,
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

let MakePayment = mongoose.model("MakePayment", makePaymentSchema);
//confirmTransction()
// ReturnMoneyOnCancellation()