
const { readData, saveData } = require("../../data");



module.exports=(req,res)=>{
    const {name,price,discount, description,category} = req.body
    const products = readData()
    const newId =products[products.length-1].id +1;
    const newProduct ={
    id: newId,
    name:name.trim(),
    price:+price,
    discount:+discount,
    description: description.trim(),
    category:category?.trim(),
    image:"defaul-image.png"
    };
    products.push(newProduct)
    saveData (products)
    
res.render(`/productos/detalle/${newId}`);
    }