require('dotenv').config()
const express = require('express')
const {port} = process.env
const app = express()

app.use(express.json())

app.listen(port, () => {
    console.log('Live on port', port)
})