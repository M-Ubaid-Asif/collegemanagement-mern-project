const mongoose = require('mongoose');
const Schema = mongoose.Schema
const model = mongoose.model



const studentsschema = Schema({
    first_name:{
        type:String,
        lowercase:true,
        required :true
    },
    last_name:{
        type:String,
        lowercase:true,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    field_of_study:{
        type:String,
        required :true
    }

})


const students = model('Students',studentsschema);


module.exports = students