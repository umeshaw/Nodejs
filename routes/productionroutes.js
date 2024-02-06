const express = require('express')
const router = express.Router()
const productController = require('../controllers/productconroller')

router.route('/productDetails').get(productController.displayProduct)

module.exports = router