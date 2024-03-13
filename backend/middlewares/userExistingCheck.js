import User from '../models/User.model.js';

const userExistingCheck = async (req,res, next) => {
    const {email} = req.body
    const user = await User.findOne({email});
    if (user) {
        return res.status(400).send({
            message: "Email already exist!"
        })
    }
    next();
}
export default userExistingCheck;