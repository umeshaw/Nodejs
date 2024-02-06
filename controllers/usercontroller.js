const userModels = require('../models/userModels')

const displayUser = async (req, res) => {
    res.json(userModels.userDetails)
}


module.exports = { displayUser}