const express = require('express')
const app = express()
const cors = require('cors')

// Read env variables ==/
require('dotenv').config()

// Connect to DB ==/
require('./database/connect')()

// Cross origin requests ==/
app.use(cors())

// Body parsing ==/
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Middleware ==/
app.use((req, res, next) => {
    console.log(`${req.method}: ${req.url}`) // log requests to the console
    next()
})

// Routes ==/
app.get(`/`, (req, res, next) => res.status(200).redirect(`/api`)) // redirect to root api route
app.use(`/api`, require('./api/')) // include api


// Listen on port  ==/
PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log(`Api listening on port: ${PORT}...`))