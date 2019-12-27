const mongoose = require('mongoose');
const moment   = require('moment');
const Schema = mongoose.Schema; 

const movieShowsSchema = new Schema({
   
    cinemaHallId: {
        type : Schema.Types.ObjectId,
        ref  : 'CinemaHall',
        required: true
    },
    movieId: {
        type: Schema.Types.ObjectId,
        ref : 'Movie'
        //required: false
    },
    showTime: { 
        type : String,
        required: false
    },
    showingFromDate: {
        type: Date,
        required: false
    },
    showingToDate: {
        type:Date,
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

async function addNewShowTime(showDTO){
    console.log("showDTO ",showDTO);
    let newShowTime  = new MovieShows({
        cinemaHallId    : showDTO.cinemaHallId,
        showTime        : showDTO.showTime,
        movieId         : showDTO.movieId,
        showingFromDate : showDTO.showingFromDate,
        showingToDate   : showDTO.showingToDate,
        createdAt    : Date.now()
       });
        
       try{
        let showTimes= await newShowTime.save();
        return showTimes;
       }catch(err){
        console.log("error occured during inserting the shows data ",err);
        return err;
       } 
}


async function findShowTime(sTime){       
       try{
           console.log("sTime",sTime)
        let isshowTime= await MovieShows.find({showTime: sTime});
        return isshowTime;
       }catch(err){
        console.log("error occured during fetching showTime ",err);
        return err;
       } 
}

async function addNewMovieShow(movieShow){        
       try{
           let sFromDate = moment(movieShow.showingFromDate).toDate();
           let sToDate   = moment(movieShow.showingToDate).toDate();
           //console.log("From date",sFromDate);
           //console.log("Showing to Date",sToDate);
        let savedMovieShow= await MovieShows.findOneAndUpdate(
            {showTime :          movieShow.showTime},

            {
             movieId         : movieShow.movieId,
             showingFromDate : sFromDate,
             showingToDate   : sToDate
            });
        return savedMovieShow;
       }catch(err){
        console.log("error occured during updating the Movie shows data ",err);
        return err;
       } 
}


async function findShowsByTime(sTime){       
    try{
      console.log("sTime",sTime)
     let isshowTime= await MovieShows.find({showTime: sTime});
     return isshowTime;
    }catch(err){
     console.log("error occured during fetching showTime ",err);
     return err;
    } 
}

async function findShowsByDate(sDate) {
    try {
        console.log("sTime", sDate);
        let newDate = moment(sDate).toDate();
        //let newDate = new Date(sDate);
        console.log("afterconversion", newDate);
        let movieShows = await MovieShows.find({showingFromDate: {$lte: newDate}}).populate('movieId');
        return movieShows;
    } catch (err) {
        console.log("error occured during fetching showTime ", err);
        return err;
    } 
}


module.exports ={
    findShowTime,
    addNewShowTime,
    addNewMovieShow,
    findShowsByTime,
    findShowsByDate
}