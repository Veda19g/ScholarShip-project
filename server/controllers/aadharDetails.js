const Aadhar =require( "../model/aadharData");

 const AadharEntry = async (req, res) => {
    const { aadharNo, accname, age } = req.body;

    try {
        const existingData = await Aadhar.findOne({ aadharNo });

        if (existingData) {
            return res.status(400).json({
                message: "Aadhar entry with the same Aadhar number already exists",
            });
        }

        const newData = await Aadhar.create({
            aadharNo,
            accname,
            age,
        });

        return res.status(201).json(newData);
    } catch (error) {
        console.error("Error in AadharEntry:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};


 const getAadharDetails = async (req, res) => {
    const { aadharNo } = req.body;

    try {
        const existingDetail = await Aadhar.findOne({ aadharNo });

        if (!existingDetail) {
            return res.status(404).json({
                message: "Aadhar entry not found",
            });
        }

        const data = await Aadhar.find({ aadharNo });

        res.status(200).json(data);
    } catch (err) {
        console.error("Error in getAadharDetails:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const checkAadhar=async(req,res)=>{

     const {aadharNo}=(req.body);
     
     try{
        existingAadhar=await Aadhar.findOne({aadharNo});

         if(existingAadhar){
            return res.json({
                success:true,
                message:"Authenication Succesful",
                _id:existingAadhar._id,
                accname:existingAadhar.accname,
                age:existingAadhar.age
            })
         }
         else{
            return res.json({
                success:false,
                message:'Authentication Failed'
            })
         }
     }
     catch(err){
        console.error("Error during authentication",error);
        return res.status(500).json({ success: false, message: 'Internal server error' });
     }

}

module.exports={AadharEntry,getAadharDetails,checkAadhar}