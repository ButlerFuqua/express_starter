const express = require('express')
const router = express.Router()


// GET - Index
router.get(`/`, (req, res, next) => res.status(200).json({ succes: true, message: `User home route` }))



module.exports = router