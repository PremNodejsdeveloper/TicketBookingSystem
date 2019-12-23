const mongoose = require('mongoose');
let Schema = mongoose.Schema
 
const stateSchema = new Schema({
   
    stateName: {
        type : String,
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

let State= mongoose.model("State", stateSchema);


async function addNewState(stNameDTO){
    let newState = new State({
        stateName : stNameDTO,
        createdAt : Date.now()
    })
    try{
        let savedState= await newState.save();
        return savedState;
       }catch(err){
        console.log(err);
        return err;
       }     
}

async function getAllState(){
    try{
        let allStates = await State.find({});
        return allStates;
       }catch(err){
        console.log(err);
        return err;
       }     
}

async function findStateByName(stName){
    try{
        //console.log(stName);
        let isStateExist = await State.find({stateName:stName});
        return isStateExist;
       }catch(err){
        console.log(err);
        return err;
       }     
}



module.exports ={
    addNewState,
    getAllState,
    findStateByName
}

