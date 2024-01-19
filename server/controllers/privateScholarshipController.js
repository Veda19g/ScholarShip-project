const PvtOrg = require("../model/PvtOrg");
const PrivateScholarship =require("../model/privateScholarShip");

const PvtScholarshipEntry=async(req,res)=>{
    
   const {pvtorgId}=req.params; 
   const {schemeName,startDate,endDate,gender,income,guidelines}=req.body;
   console.log(pvtorgId);
   try{

    const existingScheme = await PrivateScholarship.findOne({ schemeName });

    if (existingScheme) {
        return res.status(400).json({
            message: "Scheme entry with the same name already exists",
        });
    }
    
    
    
    


    const newScheme = await PrivateScholarship.create({
        schemeName,
        startDate,
        endDate,
        gender,
        income,
        guidelines
    });

    console.log("newScheme._id:", newScheme._id);
    
    await PvtOrg.findByIdAndUpdate(pvtorgId,
        {$push:{scholarships:newScheme._id}},
        {new: true})

    return res.status(201).json({
        success:true,
        message:"Entry in database made successfully"
    });
   }
   catch (error) {
    console.error("Error in ScholarShip Entry:", error);
    return res.status(500).json({ message: "Internal Server Error" });
}



}

module.exports={PvtScholarshipEntry}