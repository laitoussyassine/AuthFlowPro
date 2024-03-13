import express from "express";
const router = express.Router();
import UserControllers from "../controllers/user.controller.js";
import Role from '../models/Role.model.js';
import userExistingCheck from "../middlewares/userExistingCheck.js"
import loginValidateCheck from "../middlewares/loginValidateCheck.js"
import {protect} from "../middlewares/authTokenCheck.js";

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: API operations related to users
 */

/**
 * @swagger
 * /api/users/signup:
 *   post:
 *     summary: Register a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             example:
 *               username: JohnDoe
 *               email: john@example.com
 *               password: password123
 *     responses:
 *       '201':
 *         description: User created successfully
 *         content:
 *           application/json:
 *             example:
 *               message: User created with success
 *       '400':
 *         description: Validation failed to create user
 *         content:
 *           application/json:
 *             example:
 *               message: Validation failed to create user
 *               error: [validation error details]
 *       '500':
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             example:
 *               message: Oops, something went wrong!!!
 */

/**
 * @swagger
 * /api/users/login:
 *   post:
 *     summary: Login user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             example:
 *               email: john@example.com
 *               password: password123
 *     responses:
 *       '200':
 *         description: User logged in successfully
 *         content:
 *           application/json:
 *             example:
 *               user: { user details }
 *               token: [JWT token]
 *               name: JohnDoe
 *               role: [user role]
 *               permissions: [user permissions]
 *               message: User Logged In
 *       '401':
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             example:
 *               message: Email Not Found or incorrect password
 *       '400':
 *         description: Bad Request
 *         content:
 *           application/json:
 *             example:
 *               success: false
 *               message: [error details]
 */

/**
 * @swagger
 * /api/users/logout:
 *   get:
 *     summary: Logout user
 *     tags: [Users]
 *     responses:
 *       '200':
 *         description: Logout success
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: User logged out successfully
 *       '500':
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             example:
 *               success: false
 *               message: Internal Server Error
 */

/**
 * @swagger
 * /api/users/profile:
 *   get:
 *     summary: Get user profile
 *     tags: [Users]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       '200':
 *         description: User profile retrieved successfully
 *         content:
 *           application/json:
 *             example:
 *               message: User Profile
 *       '401':
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             example:
 *               message: Unauthorized
 */

/**
 * @swagger
 * /api/users/profile:
 *   put:
 *     summary: Update user profile
 *     tags: [Users]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       '200':
 *         description: User profile updated successfully
 *         content:
 *           application/json:
 *             example:
 *               message: update user profile
 *       '401':
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             example:
 *               message: Unauthorized
 */

// Additional JSDoc comments for other functions as needed



// Register USER
router.post('/register',userExistingCheck, UserControllers.signup);
// Login User
router.post('/login', loginValidateCheck,UserControllers.login);
// logout user
router.get('/logout',UserControllers.logout);
// user profile
// router
//     .route('/profile')
//     .get(protect, UserControllers.getUserProfile)
//     .put(protect, UserControllers.updateUserProfile)

router.post('/role', (req,res) => {
    Role.create({
        name: "admin",
        permissions: ["create", "read", "update", "delete"]
    })
    res.send("ok");
})
export default router;