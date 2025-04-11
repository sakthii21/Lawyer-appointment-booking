const mongoose = require('mongoose');

const lawywerprofileschema = new mongoose.Schema({
    lawyerId:{
          type:String,
    },
    name:{
        type:String,
        required: true
    },
    specialization: {
        type: String,
        required: true
    },
    experience: {
        type: Number,
        required: true
    },
    mobileno:{
        type:String,
        required:true
    },
    bio:{
        type:String
    },
    address: {
        street: String,
        city: String,
        state: String,
        zip: String,
        country: String,
    },
    availability: {
        type: String,
        enum: ['Available', 'Unavailable'],
        default: 'Available'
    },
    profilepicture: {
        type: String, 
        required:true   
    },
    
}, { collection: 'lawyerprofiles' });

 const lawyerprofiles = mongoose.model('lawyerprofiles',lawywerprofileschema)
module.exports = lawyerprofiles;