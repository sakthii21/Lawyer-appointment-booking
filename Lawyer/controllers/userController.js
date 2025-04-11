const user = require('../models/userModel');
//const { v4 : uuidv4 } = require('uuid');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const register = async(req,res)=>{
    const {name,email,password,role} = req.body;
    const insert = new user({
          name,email,password, role
    });
    try{
        const reg = await insert.save();
        res.status(201).send(reg);
    }catch(err){
        res.status(400).json({message:err.message});
    }
};

const login = async (req, res) => {
    const { email, password ,role} = req.body;
    try {
       
             const users = await user.findOne({ email ,role});
        
    
      if (!users) {
        return res.status(404).json({ message: 'User not found' });
      }
      const isPasswordValid = await bcrypt.compare(password, users.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid password' });
      }
      // Include the user's role in the JWT payload
      const token = jwt.sign(

        {userId:users._id},
        // { userId: users._id, role: users.role },
        'secret_key',
        { expiresIn: '2h' }
      );
      res.json({ token });
    }
  catch (err) {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    }
}
  module.exports = {register,login};