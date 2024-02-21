const express = require('express')
const router = express.Router(); 

/*  (/auten) */ 
router.get('/inicio', (req, res) =>{
    res.send('rrrrrrr')    /*prueba de funcionamiento*/ 
})

router.get('/registro', (req, res) =>{
res.send('jojsodosos')   /*prueba de funcionamiento*/ 
})





module.exports = router;
