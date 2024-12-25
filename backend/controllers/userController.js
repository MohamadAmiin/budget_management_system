const User = require('../models/User');
const bcrypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'Email already in use' });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    console.log(user)


    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const loginUser = async (req , res) => {
    try {
        const {email , password} = req.body;
        const user = await User.findOne({email})
        if(!user)return res.status(404).json({message : "User not found"});

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(400).json({message : "Invalid Password or Email"})
        
        const token = jwt.sign({id : user._id}, 'secret' , {expiresIn : '1d'})
        res.status(200).json({message : "you logedin"})
    } catch (error) {
        res.status(500).json({message : error.message})

    }
} 



module.exports = { registerUser, loginUser };
