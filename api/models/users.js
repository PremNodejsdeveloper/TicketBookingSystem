const mongoose = require('mongoose');

// Setting up Schema 

const userSchema = mongoose.Schema({
   
    firstName: {
        type : String,
        required: false
    },
    lastName: { 
        type : String,
        required: false
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    gender: {
        type:String,
        required: false
    },
    phone: {
        type:String,
        required:false
    },
    address:{
        type:String,
        required: false
    },
    createdDate: {
        type:Date,
        default:Date.now
    },
    updatedDate: {
        type:Date,
        default:Date.now
    }
});

let userModel= mongoose.model("Users", userSchema);

module.exports = {
    //Users: userModel,

    createUser: async function(userDTO){
        //create a newUser object with the users provided data
       let newUser = new userModel({
        firstName : userDTO.firstName,
        lastName  : userDTO.lastName,
        email     : userDTO.email,
        password  : userDTO.password,
        gender    : userDTO.gender,
        phone     : userDTO.phone,

       });
        
       try{
        let savedUser= await newUser.save();
        return savedUser;
       }catch(err){
        console.log(err);
        return err;
       }      
    },

    updateUser: function(){

    },

    findUserByEmail : async function(paramEmail){
        let registerdUser= await userModel.find({email:paramEmail});
        return registerdUser;
    },

    findUserByPhone : async function(checkPhoneNo){
        let registerdUser= await userModel.find({phone:checkPhoneNo});
        return registerdUser;
    }
}


