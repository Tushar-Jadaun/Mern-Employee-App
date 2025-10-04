const createEmployee= async(req,res)=>{
   console.log(req.body);
   res.send('helllo baby')
   
}

module.exports={
    createEmployee
}