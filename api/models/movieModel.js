const mongoose = require('mongoose');

//Setting Up Schema
const movieSchema = mongoose.Schema({

    movieName:{
        type :String,
        required : false
    },
    movieShow :{
        type : Date,
        required : false
    },
    venue : {
        type: String,
        required : false
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

const Movie = mongoose.model('Movie' , movieSchema);

async function addNewMovie(movieDTO){
    let newMovie = new Movie({
        movieName : movieDTO.movieName,
        movieShow : movieDTO.movieShow,
        venue     : movieDTO.venue,

       });
        
       try{
        let savedMovie= await newMovie.save();
        return savedMovie;
       }catch(err){
        console.log(err);
        return err;
       } 
}

async function updateMovieRecord(movieDTO){
    let newMovie = new movie({
        movieName : movieDTO.movieName,
        movieShow : movieDTO.movieShow,
        venue     : movieDTO.venue,
       });
    
       try{
        let savedMovie= await newMovie.save();
        return savedMovie;
       }catch(err){
        console.log(err);
        return err;
       } 
}

async function deleteMovieRecord(movieDTO){       
       try{
        let deletedMovie= await Movie.findOneAndDelete({movieName:movieDTO.movieName});
        return deletedMovie;
       }catch(err){
        console.log("error occured during findOne and deleting movie ",err);
        return err;
       } 
}

async function findByMovieName(movieDTO){       
    try{
     let existingMovie= await Movie.find({movieName:movieDTO.movieName});
     return existingMovie;
    }catch(err){
     console.log("error occured during findOne and deleting movie ",err);
     return err;
    } 
}

function updateDetails(){

}

module.exports = {
    addNewMovie,
    updateMovieRecord,
    deleteMovieRecord,
    findByMovieName
    
}