const  {Router}=require("express");
const {
    TanEntry,getTanDetails,checkTan 
} =require("./../controllers/tanDetails");

const tanRoutes = Router();

tanRoutes.route("/tan-data-entry").post(TanEntry);

tanRoutes.route("/get-tan-details").get(getTanDetails);

tanRoutes.route("/check-tan-details").post(checkTan);

module.exports=tanRoutes;