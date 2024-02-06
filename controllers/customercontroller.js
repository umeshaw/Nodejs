const customerModels = require('../models/customerModels')

const displayCustomer = async (req, res) => {
    res.json(customerModels.customerData)
}

module.exports = { displayCustomer}