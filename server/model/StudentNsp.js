const mongoose=require('mongoose');

const StudentSchema=new mongoose.Schema({
    name:{
        type:String,
       required:true
    },
    age:{
        type:String,
        required:true
    }
});

const StudentLogin=new mongoose.model('StudentLogin',StudentSchema);

module.exports=StudentLogin;