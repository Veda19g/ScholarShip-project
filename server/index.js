const express=require("express");
const bodyParser = require('body-parser');
const db=require("./db/db");
const aadharRoutes=require("./routes/aadhar.route")
const cors = require("cors");
const tanRoutes = require("./routes/tan.route");
const pvtOrgRoute=require("./routes/pvtOrgNsp.route")
const pvtScholarshipRoutes=require("./routes/pvtScholarship.route")
const studentLoginRoutes=require("./routes/studentLoginnsp.route")
const CollegeDataRoutes=require("./routes/CollegeData.route")
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api/v1/aadhar',aadharRoutes);
app.use('/api/v1/tan',tanRoutes);
app.use('/api/v1/college-data',CollegeDataRoutes);
app.use('/api/v1/nsp',pvtOrgRoute);
app.use('/api/v1/pvtScholarship',pvtScholarshipRoutes);
app.use('/api/v1/student-nsp-entry',studentLoginRoutes);
app.listen(8000, () => {
    console.log(`Server is running on port 8000`);
});
 