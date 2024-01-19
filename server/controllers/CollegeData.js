const Collegedata=require("../model/collegeData");

 const CollegeEntry = async (req, res) => {
    const {MobileNo,casteCertificate,collegeName,dob,fullName,gender,motherName,pan } = req.body;

    try {
        const existingData = await Collegedata.findOne({ MobileNo,casteCertificate,collegeName,dob,fullName,gender,motherName,pan });

        if (existingData) {
            return res.status(400).json({
                message: "Student  entry with the same Deatils already exists",
            });
        }

        const newData = await Collegedata.create({
            MobileNo,
            casteCertificate,
            collegeName,
            dob,
            fullName,
            gender,
            motherName,
            pan
        });

        return res.status(201).json(newData);
    } catch (error) {
        console.error("Error in CollegeEntry:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};


 const getCollegeDetails = async (req, res) => {
    const { collegeName,fullName} = req.body;

    try {
        const existingDetail = await Collegedata.findOne({collegeName,fullName});

        if (!existingDetail) {
            return res.status(404).json({
                message: "College entry not found",
            });
        }

        const data = await Collegedata.find({collegeName,fullName});

        res.status(200).json(data);
    } catch (err) {
        console.error("Error in Collegedetails:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const checkCollegeDetails= async (req, res) => {
    
    const {MobileNo,
        casteCertificate,
        collegeName,
        dob,
        fullName,
        gender,
        motherName,
        pan  } = req.body;
  
    try {
      const existingEntry = await Collegedata.findOne({ MobileNo,
        casteCertificate,
        collegeName,
        dob,
        fullName,
        gender,
        motherName,
        pan });
  
      if (existingEntry) {
        
        return res.json({ success: true, message: 'Authentication successful' });
      } else {
        return res.json({ success: false, message: 'Authentication failed' });
      }
    } catch (error) {
      console.error('Error during authentication:', error);
      return res.status(500).json({ success: false, message: 'Internal server error' });
    }

};


module.exports={CollegeEntry,getCollegeDetails,checkCollegeDetails}