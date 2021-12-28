require('dotenv').config()  

const mongoose = require('mongoose');
const app = require('./app');
const port = process.env.PORT || 8000

mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log('connected to db');
    app.listen(port,()=>{
        console.log(`server is running on ${port}`);
    })
})
.catch((err)=>{
    console.log(err)
})