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



app.use((err,req,res,next)=>{
  const statusCode = err.statusCode || 500;
  const message = err.message || 'internal server error';
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
