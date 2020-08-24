const express = require('express')
const app = express()

// Read env variables ==== //
require('dotenv').config()

// Connect to DB ==== //
require('./database/connect')()

// Routes ==== //
app.get(`/`, (req, res, next) => res.status(200).redirect(`/api`)) // redirect to root api route
app.use(`/api`, require('./api/')) // include api


// Listen on port  ==== //
PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log(`Api listening on port: ${PORT}...`))