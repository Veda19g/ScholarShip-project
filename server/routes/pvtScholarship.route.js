const {Router}=require('express');

const {PvtScholarshipEntry}=require("./../controllers/privateScholarshipController");

const pvtScholarshipRoutes=Router();

pvtScholarshipRoutes.route('/add-pvt-scholarship-entry/:pvtorgId').post(PvtScholarshipEntry);

module.exports=pvtScholarshipRoutes;