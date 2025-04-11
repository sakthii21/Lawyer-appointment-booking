// const lawyer = require('../models/lawyerModel');
const lawyerprofiles = require('../models/lawyerprofile');
const user = require('../models/userModel');
//const {v4: uuidv4} = require('uuid');

const getClientprofile =  async(req,res)=>{
    const userId = req.user;
    try{

        const clients = await user.findById({ _id: userId});
        if(!clients){
             return res.status(404).json({message:'Client not found'})
        }
        res.send(clients);
    }catch(err){
        console.error(err);
        res.status(500).json({message:"serve error"})
    }
};
const getLawyerprofiles = async (req, res) => {  
    try {
       const lawyers = await lawyerprofiles.find();


        res.json(lawyers);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to fetch lawyer profiles." });
    }
}

const getprofile = async (req, res) => {
    const lawyerId = req.params.lawyerId;
    console.log(lawyerId); // Log the ID to debug
    try {
        const pro = await lawyerprofiles.findOne({ lawyerId: lawyerId }); // Match against custom field
        if (!pro) {
            return res.status(404).json({ message: "Lawyer not found" });
        }
        res.json(pro);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
 };


module.exports = {getClientprofile, getLawyerprofiles ,getprofile};