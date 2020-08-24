const express = require('express')
const router = express.Router()

const UserService = require('../../services/UserService')


// GET - Index
router.get(`/`, async (req, res, next) => {

    const result = await UserService.index()

    return res.status(200).json({
        success: true,
        message: result.message
    })

})



module.exports = router