require('dotenv').config()
const express = require('express')
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./routes/studentsroutes');


app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(bodyParser.raw(express.Router().options));


app.use('/',router)

module.exports = app