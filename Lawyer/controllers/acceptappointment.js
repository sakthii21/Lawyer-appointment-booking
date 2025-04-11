const Appointment = require('../models/appointmentmodel');

const accept = async (req, res) => {
    const appointmentId = req.params.appointmentId;  // The ID of the appointment to be accepted
    const lawyerId = req.lawyerId;  // The ID of the lawyer extracted from the JWT

    try {
        // Find the appointment by its ID
        const appointment = await Appointment.findById(appointmentId);

        // If no appointment is found, return a 404 error
        if (!appointment) {
            return res.status(404).json({ message: 'Appointment not found' });
        }

        // Check if the lawyer associated with the appointment matches the lawyer trying to accept it
        if (appointment.lawyerId.toString() !== lawyerId.toString()) {
            return res.status(403).json({ message: 'Unauthorized' });
        }

        // Update the status of the appointment to 'Confirmed'
        appointment.status = 'Confirmed';
        await appointment.save();

        // Return a success response with the updated appointment
        res.status(200).json({ message: 'Appointment accepted successfully', appointment });
    } catch (error) {
        // If there is an error during the process, log it and return a 500 error
        console.error('Error accepting appointment:', error);
        res.status(500).json({ message: 'Failed to accept appointment', error });
    }
};

module.exports = { accept };
