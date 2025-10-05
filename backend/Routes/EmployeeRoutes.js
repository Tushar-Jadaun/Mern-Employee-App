const { createEmployee } = require('../controllers/EmployeeController');
const { cloudinaryFileUploader } = require('../Middlewares/fileUploader');

 const routes = require('express').Router();
 
 routes.get('/',(req,res)=>{
    res.send('Get All Employee');
 });

 routes.post('/', cloudinaryFileUploader.single('profileImage'),createEmployee);

 module.exports=routes;