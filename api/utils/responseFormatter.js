
module.exports={

    successResponse: function(pramCode,paramMessage,paramData){
       let status   =  "success";
       let code     =  pramCode;
       let message  =  paramMessage;
       let data     =  paramData
        
       return {status,code,message,data}
    },
 

    errorResponse: function (pramCode,paramMessage,paramData){
      let status   =  "error";
      let code     =  pramCode;
      let message  =  paramMessage;
      let error    =  paramData
        
       return {status,code,message,error}
    }

}