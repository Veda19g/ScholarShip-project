const mongoose=require('mongoose');

const AadharSchema=new mongoose.Schema({   
 aadharNo:{type:String,required:true},
 accname:{type:String,required:true},
 age:{type:Number,required:true}, 
});

const Aadhar=new mongoose.model('Aadhar',AadharSchema);

module.exports=Aadhar;