const Users = require('../models/users');
const validateName= require('../utils/usernameValidator');
const verifyMobNo= require('../utils/verifymobileNo');

function validate(userDTO){
    let userData={};
        userData.phone     = false;
        userData.email     = false;
        userData.firstName = false;
        userData.lastName  = false;

    let verifedFirstName,verifiedLastName,verifiedEmail;
    let verifiedMobileNo=false;
    verifedFirstName = validateName.validateUsername(userDTO.firstName);
    
    if(verifedFirstName===null){
       userData.firstName = true;
    }
    verifiedMobileNo = verifyMobNo.verifyMobileNo(userDTO.phone);
    if(verifiedMobileNo === true){
        userData.phone=true;
    }
        return userData;
    
}


module.exports = {
    validate
}