const { createEmployee } = require('../controllers/EmployeeController');

 const routes = require('express').Router();
 
 routes.get('/',(req,res)=>{
    res.send('Get All Employee');
 });

 routes.post('/', createEmployee);

 module.exports=routes;