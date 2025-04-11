const Appointment = require('../models/appointmentmodel');

const view = async(req,res)=>{
     

     try{
        const result = await Appointment.find({lawyerId:req.lawyerId});
        res.json(result);
     }catch(err){
        console.log(err);
        res.status(500).json({message:err.message});
     }
}

const clientview = async (req, res) => {
  try {
      
      const appointments = await Appointment.find({ clientId: req.user });

      if (!appointments.length) {
          return res.status(404).json({ message: 'No appointments found' });
      }

      res.status(200).json(appointments);
  } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
  }
};


module.exports = {view,clientview};

