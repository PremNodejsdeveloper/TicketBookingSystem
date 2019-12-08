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

const movieModel = mongoose.model('Movie' , movieSchema);

async function addNewMovie(movieDTO){
    let newMovie = new movieModel({
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
    let newMovie = new movieModel({
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
        let deletedMovie= await movieModel.findOneAndDelete({movieName:movieDTO.movieName});
        return deletedMovie;
       }catch(err){
        console.log("error occured during findOne and deleting movie ",err);
        return err;
       } 
}


function updateDetails(){

}

module.exports = {
    //movieModel,
    addNewMovie,
    updateMovieRecord,
    deleteMovieRecord,
    updateDetails
    
}