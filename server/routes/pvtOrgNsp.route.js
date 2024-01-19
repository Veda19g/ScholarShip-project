const  {Router}=require("express");

const {addEntry,getDetail}=require("./../controllers/pvtOrgController");

const pvtOrgRoute=Router();

pvtOrgRoute.route('/add-pvt-org-nsp').post(addEntry);

pvtOrgRoute.route('/check-pvt-org-nsp').post(getDetail);


module.exports=pvtOrgRoute;       