const Appointment = require('../models/appointmentmodel');

const newapp = async (req, res) => {
    const userId = req.user;
    const lawyerId = req.params.lawyerId;
    // Ensure this is set by your auth middleware
    const {
        // lawyerId,
        name,
        phone,
        email,
        address,
        issueType,
        summary,
        urgencyLevel,
        preferredAppointment,
        status
    } = req.body;
   
   
    console.log('Received request body:', req.body);
    console.log('User ID:', userId);

   
    const newbook = new Appointment({
        clientId: userId, 
        lawyerId,
        name,
        phone,
        email,
        address,
        issueType,
        summary,
        urgencyLevel,
        preferredAppointment,
        status
    });

    try {
        
        const booking = await newbook.save();
        res.status(201).json({ message: 'Appointment created successfully', booking });
    } catch (err) {
        console.error('Error creating appointment:', err);
        res.status(400).json({ message: 'Failed to create appointment', error: err.message });
    }
};

module.exports = { newapp };
