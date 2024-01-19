const Tan =require( ".././model/tanData");

 const TanEntry = async (req, res) => {
    const { tanNo, orgName} = req.body;

    try {
        const existingData = await Tan.findOne({ tanNo });

        if (existingData) {
            return res.status(400).json({
                message: "Tan entry with the same Tan number already exists",
            });
        }

        const newData = await Tan.create({
            tanNo,
            orgName
        });

        return res.status(201).json(newData);
    } catch (error) {
        console.error("Error in TanEntry:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};


 const getTanDetails = async (req, res) => {
    const { tanNo } = req.body;

    try {
        const existingDetail = await Tan.findOne({ tanNo });

        if (!existingDetail) {
            return res.status(404).json({
                message: "Tan entry not found",
            });
        }

        const data = await Tan.find({ tanNo });

        res.status(200).json(data);
    } catch (err) {
        console.error("Error in getTanDetails:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const checkTan= async (req, res) => {
    
    const { tanNo } = req.body;
  
    try {
      const existingTan = await Tan.findOne({ tanNo });
  
      if (existingTan) {
        
        return res.json({ success: true, message: 'Authentication successful',_id:existingTan._id,orgName:existingTan.orgName });
      } else {
        return res.json({ success: false, message: 'Authentication failed' });
      }
    } catch (error) {
      console.error('Error during authentication:', error);
      return res.status(500).json({ success: false, message: 'Internal server error' });
    }

};


module.exports={TanEntry,getTanDetails,checkTan}