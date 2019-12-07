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
//exporting the user model
//module.exports=userModel;
module.exports = {
    Users: userModel,

    createUser: async function(userDTO){
        //create a newUser object with the users provided data
       let newUser = new this.Users({
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
        console.log("error occured creating user",err);
        return err;
       }      
    },

    updateUser: function(){

    },

    findUserByEmail : function(paramEmail){
        //let registerdUser=
        this.Users.find({email:paramEmail})
        .then(function(err,data){
            if(err){
                return err
            }else{
                console.log("data==> ",data);
                return data;
            }
        })
        //return registerdUser;
    }
}


