const  {Router}=require("express");
const {
    AadharEntry,getAadharDetails,checkAadhar
} =require("./../controllers/aadharDetails");

const aadharRoutes = Router();

aadharRoutes.route("/aadhar-data-entry").post(AadharEntry);

aadharRoutes.route("/get-aadhar-details").get(getAadharDetails);

aadharRoutes.route("/check-aadhar-details").post(checkAadhar);

module.exports=aadharRoutes;