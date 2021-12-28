const students = require("../models/students");

const createdao =async (req)=>{
   try {
       const data = await students.create(req.body)
       return data
       
   } catch (error) {
       console.log(error)
   }
   
   
   
}


const readdao = async(req)=>{

    try {
        const data = await students.find();
        return data
        
    } catch (error) {
        console.log(error)
    }
}


const updatedao = async(req)=>{
    try {
        const _id = await req.body.id
        const data = await students.findByIdAndUpdate(_id,req.body);
        
        return data?{message:'success'}:{message:"failed"}
    } catch (error) {
        console.log(error)
    }
}

const deletedao = async(req)=>{
    try {

        const _id =await req.body.id
        const data = await students.findByIdAndDelete(_id);

        return data?{message:"success"}:{message:"failed"}


    } catch (error) {
        console.log(error)
    }
}



module.exports = {createdao,readdao,updatedao,deletedao}

