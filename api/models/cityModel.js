//let State =  require('../models/stateModel');
const mongoose = require('mongoose');
let Schema = mongoose.Schema;
 
const citySchema = Schema({
   
    cityName: {
        type : String,
        required: false
    },
    state: { 
        type : Schema.Types.ObjectId, 
        ref: 'State' ,
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

let City= mongoose.model("City", citySchema);

async function addNewCity(stId,cName){
    let newCity = new City({
        cityName: cName,
        state : stId
    })
    try{
        let savedCity= await newCity.save();
        return savedCity;
       }catch(err){
        console.log(err);
        return err;
       }     
}

async function cityByName(cName){
    try{
        let isCity= await City.find({cityName:cName})
        return isCity;
       }catch(err){
        console.log("error during finding city by name",err);
        return err;
       }     
}

async function cityWithState(cName){
    try{
        let isCity= await City.find({cityName:cName}).populate('state')
        return isCity;
       }catch(err){
        console.log("error occured during finding citywith state",err);
        return err;
       }     
}

module.exports ={
    addNewCity,
    cityByName,
    cityWithState
}