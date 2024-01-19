const PvtOrg=require('./../model/PvtOrg');
const Tan=require("../model/tanData");

const addEntry = async (req, res) => {
    const { orgName } = req.body;
 
    console.log('org name from req.body:', orgName);

    try {
        // Using findOne with a filter object
        const existingOrg = await PvtOrg.findOne({ name: orgName });

        if (existingOrg) {
            return res.json({ success: false, message: 'Organization already exists', existingOrg });
        }

        const savedPvtOrg = await PvtOrg.create({
            name: orgName
        });

        res.json({ success: true, message: 'Private organization registered successfully', pvtOrg: savedPvtOrg });
    } catch (error) {
        console.error('Error registering private organization:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

const getDetail = async (req, res) => {
    const { orgName } = req.body;

    console.log(orgName);

    try {
        if (!orgName) {
            return res.status(400).json({ error: 'orgname is required in the request body' });
        }

        const existingOrg = await PvtOrg.findOne({ name:orgName })
      
        console.log('Existing Org:', existingOrg);
          
        if (!existingOrg) {
            return res.json({
                success:false,
                message:"Org is not registered"
            });
        }

        res.json({
            success:true,
            message:"your org is registered within our db",
            id:existingOrg._id
        })


    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }


    
};




module.exports={addEntry,getDetail};