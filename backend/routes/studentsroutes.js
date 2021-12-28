const express = require('express');
const { create, read, update, deletedata } = require('../controllers/studentscontroller');
const router = express.Router();


router.post('/create',create);

router.get('/read',read);



router.put('/update',update)

router.delete('/delete',deletedata)

module.exports = router