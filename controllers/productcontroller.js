const productModels = require('../models/productModels')


const displayProduct = async (req, res) => {
    res.json(productModels.productData)
}



module.exports = { displayProduct}