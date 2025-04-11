const jwt = require('jsonwebtoken');

// const auth = () => {
//   return (req, res, next) => {
//     const token = req.header('Authorization')?.split(' ')[1];
//     if (!token) {
//       console.log('Token missing');
//       return res.status(401).json({ error: "Token required" });
//     }

//     try {
//       const decoded = jwt.verify(token, 'secret_key');
//       req.user = decoded.userId;
//     //   req.userRole = decoded.role;
//       console.log('Token decoded:', decoded);

//     //   if (roles.length && !roles.includes(decoded.role)) {
//     //     console.log('Access forbidden for role:', decoded.role);
//     //     return res.status(403).json({ error: "Access forbidden" });
//     //   }

//       next();
//     } catch (err) {
//       console.log('Token verification failed:', err);
//       res.status(401).json({ error: "Token is not valid" });
//     }
//   };
// };

// module.exports = auth;
const auth = (req,res,next)=>{
    //const token = req.header('Authorization').replace('Bearer'," ");
 const token = req.header('Authorization')?.split(' ')[1];
    if(!token) return res.status(401).json({error: "Token required"});
    try{
     const decoded = jwt.verify(token,"secret_key");//verifying the access token
     req.user = decoded.userId; 
     next();
    }catch(err){
     res.status(401).json({error: "Invalid Token"});//after 1 hour the acces token get expired . erroe will be acquired in cache 
    }

    
 };
 module.exports = auth;

