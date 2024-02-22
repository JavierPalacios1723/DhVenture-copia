const express = require('express')
const router = express.Router(); 
const prodController = require('../controllers/products');


router.get('/', prodController.prod)





module.exports = router;
