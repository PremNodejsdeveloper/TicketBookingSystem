const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const performanceNumber = new Schema({
   
    performanceStartTime: {
        type : Date,
        required: true
    },
    performanceEndTime: { 
        type : Date,
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

let PerformanceNumber = mongoose.model("PerformanceNumber", performanceNumber);


async function addNewPerformance(performData){
    let newPerformance       = new PerformanceNumber({
        performanceStartTime : Date.now(),
        performanceEndTime   : Date.now(),
        createdAt            : Date.now()
       });
        
       try{
        let savedPerformance= await newPerformance.save();
        return savedPerformance;
       }catch(err){
        console.log("error during Saving New Performace Data",err);
        return err;
       } 
}


async function updatePerformance(performData){
       try{
        let updatedPerformance= await PerformanceNumber.updateOne(
            {_id:performData.performanceId},
            {performanceEndTime:performData.performEndTime});
         return updatedPerformance;
       }catch(err){
        console.log("error during Saving New Performace Data",err);
        return err;
       } 
}


module.exports={
    addNewPerformance,
    updatePerformance
}
console.log(module);