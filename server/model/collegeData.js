const mongoose=require("mongoose")

const CollegeSchema=new mongoose.Schema({
    collegeName:{
        type:String,
        required:true
    },
    fullName:{
        type:String,
        required:true
    },
    MobileNo:{
        type:String,
        required:true
    }, 

   casteCertificate:{
    type:String,
    required:true
   }, 

   dob:{
        type:Date,
        required:true
   }, 

  gender:{
    type:String,
    required:true
  }, 

  motherName:{
    type:String,
    required:true
 }, 
 
 pan:{
    type:String,
    required:true
}
});

const Collegedata=new mongoose.model('collegeData',CollegeSchema);

module.exports=Collegedata