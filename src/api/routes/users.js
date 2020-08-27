const express = require('express')
const router = express.Router()

const User = require('../../models/user')
const UserService = require('../../services/UserService')
const userService = new UserService(User)


// GET - Index
router.get(`/`, async (req, res, next) => {

    const result = await userService.index()
    const { users, success } = result

    if (!success) return res.json(result)

    return res.status(200).json({
        success: true,
        message: result.message,
        users
    })
})

// POST - CREATE ==/
router.post(`/`, async (req, res, next) => {

    const reqBody = req.body

    const result = await userService.registerUser(reqBody)
    const { newUser, success } = result

    if (!success) return res.json(result)

    return res.status(200).json({
        success: true,
        message: result.message,
        newUser
    })
})





module.exports = router