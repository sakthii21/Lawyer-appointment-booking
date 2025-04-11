const jwt = require('jsonwebtoken');

const authLawyer = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) return res.status(401).json({ error: "Token required" });

    try {
        const decoded = jwt.verify(token, "your_secret_key");
        req.lawyerId = decoded.lawyerId;  
        console.log('Decoded Lawyer ID:', req.lawyerId);

       
        const roles = []; 
        if (roles.length && !roles.includes(decoded.role)) {
            return res.status(403).json({ error: "Access forbidden" });
        }

        next();
    } catch (err) {
        res.status(401).json({ error: "Token is not valid" });
    }
};

module.exports = authLawyer;
