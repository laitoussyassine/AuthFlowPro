import express from "express";
const router = express.Router();
import UserControllers from "../controllers/user.controller.js";
import Role from '../models/Role.model.js';
import userExistingCheck from "../middlewares/userExistingCheck.js"
import loginValidateCheck from "../middlewares/loginValidateCheck.js"




// Register USER
router.post('/register',userExistingCheck, UserControllers.signup);
// Login User
router.post('/login', loginValidateCheck,UserControllers.login);
// logout user
router.get('/logout',UserControllers.logout);

router.post('/role', (req,res) => {
    Role.create({
        name: "editor",
        permissions: ["create", "read", "update"]
    })
    res.send("ok");
})
export default router;