const mongoose = require('mongoose');

// Setting up Schema 
const movieShowsSchema = mongoose.Schema({
   
    cinemaHallId: {
        type : Number,
        required: false
    },
    showTime: { 
        type : Date,
        required: false
    },
    movieId: {
        type: Number,
        required: false
    },
    showingFromDate: {
        type: Date,
        required: true
    },
    showingToDate: {
        type:String,
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

let MovieShows = mongoose.model("MovieShows", movieShowsSchema);