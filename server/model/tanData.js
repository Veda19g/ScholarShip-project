const mongoose=require('mongoose');

const TanSchema=new mongoose.Schema({   
 tanNo:{type:String,required:true},
 orgName:{type:String,required:true}, 
});

const Tan=new mongoose.model('Tan',TanSchema);

module.exports=Tan;