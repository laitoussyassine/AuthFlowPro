import express from "express";
const router = express.Router();
import UserControllers from "../controllers/user.controller.js";
import Role from '../models/Role.model.js';




// POST USER
router.post('/', UserControllers.createUser);

router.post('/role', (req,res) => {
    Role.create({
        name: "admin",
        permissions: ["create", "read", "update", "delete"]
    })
    res.send("ok");
})

export default router;