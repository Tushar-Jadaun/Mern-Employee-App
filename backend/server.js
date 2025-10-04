const express = require('express');
const app = express();
const bodyParser = require('body-parser');


require('dotenv').config();
const PORT = process.env.PORT || 8080;

require('./utils/db');
const EmployeeRouter = require('./Routes/EmployeeRoutes');

app.use(bodyParser.json()); 

app.get('/',(req,res)=>{
    res.status(500).send('Employee is running on server')
})

app.use('/api/employees',EmployeeRouter);

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`); 
});