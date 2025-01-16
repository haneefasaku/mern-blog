const express = require('express')
const connectDb = require('./config/db')
const userRoutes = require('./routes/userRoutes')
const authRoutes = require('./routes/authRoutes')
const app = express()
const port = 3000


app.use(express.json())
connectDb();
app.use('/user', userRoutes)
app.use('/auth',authRoutes)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
