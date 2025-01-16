const mongoose = require('mongoose');
require('dotenv').config()
const connectDb = async ()=> {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log('database connected successfully');
        
    } catch (error) {
        console.log(error);
        res.statu(500).json(error);
    }
}

module.exports = connectDb