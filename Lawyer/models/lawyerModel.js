const  mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const lawyerSchema = new mongoose.Schema({

    name :{
        type: String,
        required: true  
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    role:{
        type: String,
        required: true
    }});

    lawyerSchema.pre('save',async function(next){
        if(!this.isModified('password')){
            return next();
        
        }
const salt = await bcrypt.genSalt(10);
this.password = await bcrypt.hash(this.password, salt);
  next();
    });

    const lawyer = mongoose.model('lawyer',lawyerSchema);
    module.exports = lawyer;


