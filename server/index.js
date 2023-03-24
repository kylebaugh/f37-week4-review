// Require packages
const express = require('express')
const cors = require('cors')

// Create app instance 
const app = express()

// Set up middleware
app.use(express.json())
app.use(cors())

// ENDPOINTS



// Open door/port for my server
app.listen(2319, () => console.log("2319! We've got a 2319!"))