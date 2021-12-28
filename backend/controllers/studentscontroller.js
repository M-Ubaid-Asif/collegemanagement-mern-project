const { createservice, readservice, updateservice, deleteservice } = require("../services/studentsservice")


exports.create =async(req,res)=>{

    try {
        const data = await createservice(req);
        res.json({
            message:data?`success`:`somthing went wrong please try agaim`,data:data
        })
        
    } catch (error) {
        
    }
    
} 

exports.read = async(req,res)=>{
    try {
        const data = await readservice()
        res.json(data)
    } catch (error) {
        console.log(error)
    }
    
      
}



exports.update = async (req,res)=>{
    try {
        const data = await updateservice(req);
        res.json(data);
    } catch (error) {
        console.log(error)
    }
}


exports.deletedata = async(req,res)=>{
    try {
        console.log('---controler', req.body)
        const data = await deleteservice(req);
        res.json(data);
    } catch (error) {
        console.log(error);
    }
}
