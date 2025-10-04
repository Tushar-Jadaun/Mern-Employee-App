const mongoose = require("mongoose");
const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL)
.then(()=>{
    console.log('mongoose connected successfully');
})
.catch((error)=>{
    console.log('error in mongoose',error);
    
})