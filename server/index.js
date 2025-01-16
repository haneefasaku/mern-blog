const express = require('express')
const connectDb = require('./config/db')
const userRoutes = require('./routes/userRoutes')
const app = express()
const port = 3000



connectDb();
app.use('/user', userRoutes)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
