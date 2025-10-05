const { createEmployee, getAllEmployees , getByIdEmployees, deleteEmployee, updateByIdEmployee } = require('../controllers/EmployeeController');
const { cloudinaryFileUploader } = require('../Middlewares/fileUploader');

 const routes = require('express').Router();
 
 routes.get('/', getAllEmployees);

 routes.post('/', cloudinaryFileUploader.single('profileImage'),createEmployee);
 
 routes.put('/:id', cloudinaryFileUploader.single('profileImage'),updateByIdEmployee);

 routes.get('/:id', getByIdEmployees);

 routes.delete('/:id',deleteEmployee)

 module.exports=routes;