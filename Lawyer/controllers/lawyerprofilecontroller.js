const lawyerprofiles = require('../models/lawyerprofile');
const mongoose = require('mongoose');
const lawyer = require('../models/lawyerModel');
const express = require('express');


const  createprofile = async (req,res)=>{
    const lawyerId=req.lawyerId;
const {name,specialization,experience,mobileno,bio,address,availability,profilepicture} = req.body;

const newprofile = new lawyerprofiles({
   lawyerId, name,specialization,experience,mobileno,bio,address,availability,profilepicture
})
try{
        
    const result = await newprofile.save();
            res.status(200).send(result);
        }catch(err){
            
            res.status(404).send({message: err.message});
        }
    }
    
    const updateprofile = async(req,res)=>{
        const lawyerId=req.lawyerId
        const updatedprofile = req.body;
    
        try{
            const pro= await lawyerprofiles.findOneAndUpdate({lawyerId: lawyerId},updatedprofile,{new:true});
            if(!pro){
                return res.status(404).json({message: "lawyer not found"});
            }
            res.json(pro);
        }catch(err){
            console.error(err);
            res.status(500).json({message: err.message});
        }
    };

    

    const getprofile = async (req, res) => {
        const lawyerId = req.lawyerId;
        console.log('Lawyer ID in getProfile:', lawyerId);
    
        try {
            const profile = await lawyerprofiles.findOne({ lawyerId });
            if (!profile) {
                return res.status(404).json({ message: "Lawyer not found" });
            }
            res.json(profile);
        } catch (err) {
            console.error('Error:', err);
            res.status(500).json({ message: err.message });
        }
    };
    
    
    
module.exports = {createprofile,updateprofile,getprofile};

