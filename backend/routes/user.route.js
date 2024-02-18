import express from "express";
const router = express.Router();
import UserControllers from "../controllers/user.controller.js";
import Role from '../models/Role.model.js';
import userExistingCheck from "../middlewares/userExistingCheck.js"
import loginValidateCheck from "../middlewares/loginValidateCheck.js"




// Register USER
router.post('/',userExistingCheck, UserControllers.signup);
// Login User
router.post('/login', loginValidateCheck,UserControllers.login);
// logout user
router.get('/logout',UserControllers.logout);
// user profile
router.route('/profile').get(UserControllers.getUserProfile).put(UserControllers.updateUserProfile)

router.post('/role', (req,res) => {
    Role.create({
        name: "editor",
        permissions: ["create", "read", "update"]
    })
    res.send("ok");
})
export default router;