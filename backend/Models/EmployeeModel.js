const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    phone:{
        type:String,
        require:true,
    },
    department:{
        type:String,
        require:true,
    },
    profileImage:{
         type:String,
        require:true,
    },
    salary:{
        type:String,
        require:true,
    },
    CreatedAt:{
        type:Date,
        require:true,
        default: new Date()
    },
    updatedAt:{
        type:Date,
        require:true,
        default: new Date()
    }


});

const EmployeeModel = mongoose.model('employees',EmployeeSchema);
module.exports=EmployeeModel;