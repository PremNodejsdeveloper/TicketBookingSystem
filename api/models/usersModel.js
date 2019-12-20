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
    createdAt: {
        type:Date,
        default:Date.now
    },
    updatedAt: {
        type:Date,
        default:Date.now
    }
});

let Users= mongoose.model("Users", userSchema);

module.exports = {
    //Users: userModel,

    createUser: async function(userDTO){
        //create a newUser object with the users provided data
       let newUser = new Users({
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
       // update user details 
    },

    findUserByEmail : async function(paramEmail){
        let registerdUser= await Users.find({email:paramEmail});
        return registerdUser;
    },

    findUserByPhone : async function(checkPhoneNo){
        let registerdUser= await Users.find({phone:checkPhoneNo});
        return registerdUser;
    }    

}


