const  {Router}=require("express");
const {
    CollegeEntry,getCollegeDetails,checkCollegeDetails
} =require("../controllers/CollegeData");

const CollegeDataRoutes = Router();

CollegeDataRoutes.route("/college-data-entry").post(CollegeEntry);

CollegeDataRoutes.route("/get-college-details").get(getCollegeDetails);

CollegeDataRoutes.route("/check-college-details").post(checkCollegeDetails);

module.exports=CollegeDataRoutes;