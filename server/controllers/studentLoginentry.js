const StudentLogin = require("./../model/StudentNsp");
const studentLogin =require("./../model/StudentNsp");



const loginCredentialsEntry=async(req,res)=>{

      const {name,age}=req.body;

      try{
       const existingUser=await studentLogin.findOne({name});
       if(existingUser){
        return res.status(400).json({
            success:false,
            message: "Student entry with the same  name already exists",
        });
       }
       else{
        const newData = await studentLogin.create({
            name,
            age
        });
        return res.status(201).json({
            success:true,
            message: "Student login entry done to nsp",
        });
       }
      }
      catch(err){
        console.error("Error in getTanDetails:",err);
        res.status(500).json({ message: "Internal Server Error" });
      }

}


const checkLoginDetails=async(req,res)=>{

    const {name}=req.body;
    
    try {
        if (!name) {
            return res.status(400).json({ error: 'name is required in the request body' });
        }

        const existingStudent = await StudentLogin.findOne({ name:name })
      
        console.log('Existing Student:', existingStudent);
          
        if (!existingStudent) {
            return res.json({
                success:false,
                message:"Student is not registered"
            });
        }

        res.json({
            success:true,
            message:"your details is registered within our db",
            id:existingStudent._id
        })


    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }

}

module.exports={loginCredentialsEntry,checkLoginDetails};