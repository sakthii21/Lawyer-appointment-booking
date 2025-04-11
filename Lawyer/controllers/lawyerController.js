const lawyer = require('../models/lawyerModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const registerLawyer =  async(req,res)=>{
    const{name,email,password,role} = req.body;

    const insert = new lawyer({
        name,email,password,role
    })
    try{
        
const reg = await insert.save();
        res.status(200).send(reg);
    }catch(err){
        
        res.status(404).send({message: err.message});
    }
}


const loginLawyer = async (req, res) => {
    const { email, password,role } = req.body;
    try {
        
            const lawyers = await lawyer.findOne({ email,role });
       

      
      if (!lawyers) {
        return res.status(404).json({ message: 'Lawyer not found' });
      }
      const isPasswordValid = await bcrypt.compare(password, lawyers.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid password' });
      }
      // Include the lawyer's role in the JWT payload
      const token = jwt.sign(
        { lawyerId: lawyers._id, role: 'lawyer' },
        'your_secret_key',
        { expiresIn: '2h' }
      );
      res.json({ token });
    }
     catch (err) {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    }
}
  
module.exports = {registerLawyer,loginLawyer};