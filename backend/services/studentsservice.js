const { createdao, readdao, updatedao, deletedao } = require("../dao/studentsdao")


exports.createservice = async(req)=>{
    try {
        return createdao(req)
    } catch (error) {
        console.log(error)
    }
}



exports.readservice = async()=>{
    try {
        return readdao()
    } catch (error) {
        console.log(error)
    }
}



exports.updateservice  = async (req)=>{
    try {
        return await updatedao(req)
    } catch (error) {
        console.log(error)
    }
}


exports.deleteservice = async (req)=>{
    try {
        return await deletedao(req);
    } catch (error) {
        console.log(error);
    }
}