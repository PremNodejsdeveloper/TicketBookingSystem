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
    language: {
        type: String,
        required:false
    },
    hours: {
        type: Number,
        required:false
    },
    movieType: {
        type: String,
        required: false
    },
    venue : {
        type: String,
        required : false
    },
    createdAt: {
        type:Date,
        default:Date.now()
    },
    updatedAt: {
        type:Date,
        default:Date.now()
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

async function updateMovieRecord(editedRecord){ 
       try{
        //console.log("edited Record=> ",editedRecord);
        editedRecord.updatedAt = Date.now();
        let updatedMovie= await Movie.updateOne({_id: editedRecord.id},{$set: editedRecord })
        return updatedMovie;
       }catch(err){
        console.log("error occured inside movieModel updateMovieRecord => ",err);
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

async function findMovieByName(movieDTO){       
    try{
     let existingMovie= await Movie.find({movieName:movieDTO.movieName});
     return existingMovie;
    }catch(err){
     console.log("error occured during findOne and deleting movie ",err);
     return err;
    } 
}

async function findMovieById(movieId){       
    try{
     let existingMovie= await Movie.findById({_id: movieId});
     return existingMovie;
    }catch(err){
     console.log("error occured during findind a movie by Id ",err);
     return err;
    } 
}

async function findAllMovies(){       
    try{
     let listOfMovies= await Movie.find({});
     return listOfMovies;
    }catch(err){
     console.log("error occured during find All movies ",err);
     return err;
    } 
}

function updateDetails(){

}

module.exports = {
    addNewMovie,
    deleteMovieRecord,
    updateMovieRecord,
    findMovieByName,
    findMovieById,
    findAllMovies
    
}