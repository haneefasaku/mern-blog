const User = require("../models/userModel")
const bcrypt = require('bcrypt');
const saltRounds = 10;
    
const signup = async (req, res)=> {
    const {username, email, password} = req.body

    if(!username || !email || !password || username === "" || email === "" || password === ""){
        return res.status(400).json({message:"All field are required"})
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
        res.status(500).json({message:error.message})
    }

    
}

module.exports = {
    signup
}