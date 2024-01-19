const {Router}=require("express");
const {loginCredentialsEntry,checkLoginDetails}=require("../controllers/studentLoginentry")

const studentLoginRoutes=Router();

studentLoginRoutes.route("/student-login-credentials").post(loginCredentialsEntry);

studentLoginRoutes.route("/check-student-login-details").post(checkLoginDetails);

module.exports=studentLoginRoutes;
