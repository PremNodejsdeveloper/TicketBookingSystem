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
    showing_from_date: {
        type: Date,
        required: true
    },
    showing_to_date: {
        type:String,
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

let MovieShows = mongoose.model("MovieShows", movieShowsSchema);