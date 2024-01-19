const mongoose=require("mongoose");
const PrivateScholarship=require("./privateScholarShip");
const Tan =require("./tanData")
const PvtOrgSchema=new mongoose.Schema({
    name:{
      type:String,
      required:true
    },
    scholarships:[{
       type:mongoose.Schema.Types.ObjectId,
       ref:'PrivateScholarship',
     }]
});
const PvtOrg=new mongoose.model("PvtOrg",PvtOrgSchema);

module.exports=PvtOrg;

