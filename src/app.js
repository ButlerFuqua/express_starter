const express = require('express')
const app = express()

// Read env variables
require('dotenv').config()

// Connect to DB
require('./database/connect')()


app.get(`/`, (req, res, next) => {
    res.status(200).json({ success: true, message: `Home route` })
})


PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log(`Api listening on port: ${PORT}...`))