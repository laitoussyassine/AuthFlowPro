import jwt from 'jsonwebtoken';
import User from '../models/User.model.js';

const protect = async (req, res, next) => { 
    let token;
    token = req.cookies.jwt;

    if(token) {
        try {
            const decoded = jwt.verify(token, procces.env.secret_key);
            req.user = await User.findById(decoded.userId).select('-password');
            next();
        } catch (error) {
            res.status(401).json({
                message:'Not Authorized, Invalid Token'
            });
        }
    } else {
        res.status(401).json({
            message:'Not Authorized, No Token'
        })
    }
}

export  {protect};