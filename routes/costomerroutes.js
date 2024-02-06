const express = require('express');
const router =  express.Router();
const customerController = require('../controllers/customercontroller');


router.route('/customerDetails').get(customerController.displayCustomer);
router.route('/getcustomerDetails').get((req,res)=>{
    // console.log(req.url,'router fired')
})



module.exports = router