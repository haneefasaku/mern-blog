const User = require("../models/userModel")
const bcrypt = require('bcrypt');
const errorHandler = require("../utils/error");
const saltRounds = 10;
    
const signup = async (req, res, next)=> {
    const {username, email, password} = req.body

    if(!username || !email || !password || username === "" || email === "" || password === ""){
        next(errorHandler(400,'All Field are required'))
    }

    const hashedPassword = bcrypt.hashSync(password, saltRounds);

    const newUser = new User({
        username,
        email,
        password:hashedPassword,
    });

    try {
        await newUser.save();
        res.json({message:'signup successfull'})
    } catch (error) {
        next(error);
    }

    
}

module.exports = {
    signup
}