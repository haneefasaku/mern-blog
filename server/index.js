const express = require('express')
const connectDb = require('./config/db')
const app = express()
const port = 3000

connectDb();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})