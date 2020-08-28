const express = require('express')
const router = express.Router()

const User = require('../../models/user')
const UserService = require('../../services/UserService')
const userService = new UserService(User)


// GET - Index
router.get(`/`, async (req, res, next) => {

    const result = await userService.index()
    const { success } = result

    if (!success) return res.json(result)

    res.status(200).json(result)
})

// POST - CREATE ==/
router.post(`/`, async (req, res, next) => {

    const reqBody = req.body

    const result = await userService.registerUser(reqBody)
    const { success } = result

    if (!success) return res.status(400).json(result)

    res.status(201).json(result)
})

// POST - Login
router.post(`/login`, async (req, res, next) => {
    const reqBody = req.body

    const result = await userService.login(reqBody)
    const { success } = result

    if (!success) res.status(500).json(result)

    res.status(200).json(result)
})


module.exports = router