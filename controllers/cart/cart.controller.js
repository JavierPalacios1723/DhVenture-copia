/*const path = require('path');*/

/*module.exports =  (req, res) =>{
    res.send('carrito')
}*/

module.exports = (req, res) => {
    res.sendFile(path.join(__dirname, '../../views/productCart.html'))
}