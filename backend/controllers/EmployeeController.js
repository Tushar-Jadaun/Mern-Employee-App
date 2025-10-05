const EmployeeModel = require("../Models/EmployeeModel");

const createEmployee= async(req,res)=>{
try {
       const body= req.body;
       const profileImage = req.file ? req.file?.path : null ;
       body.profileImage = profileImage;
       console.log(body);
       const emp = new EmployeeModel(body);
       await emp.save();
       res.status(201).json({
        message:'Employee Created',
        success:true,
       })
} catch (error) {
    res.status(500).json({error:'Internal server error',
        success:false,
        error:error
    });
}
}

module.exports={
    createEmployee
}