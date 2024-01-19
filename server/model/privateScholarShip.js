const mongoose=require("mongoose");

const PrivateScholarshipSchema=new mongoose.Schema({
    
    schemeName:{
        type:String,
        required:true
    },
    startDate:{
        type:Date,
        required:true
    },
    endDate:{
        type:Date,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    income:{
        type:Number,
        required:true
    },
    guidelines:{
        type:String,
        required:true
    }

});

const PrivateScholarship=new  mongoose.model('PrivateScholarship',PrivateScholarshipSchema);

module.exports=PrivateScholarship