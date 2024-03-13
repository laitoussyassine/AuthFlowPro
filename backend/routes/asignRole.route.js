import express from "express";
const router = express.Router();
import assignRole from '../controllers/asignRole.controller.js';

/**
 * @swagger
 * /api/users/assign-role/{userId}/{roleId}:
 *   post:
 *     summary: Assign a role to a user
 *     tags:
 *       - Users
 *     parameters:
 *       - name: userId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the user to assign the role to
 *       - name: roleId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the role to assign to the user
 *     responses:
 *       '200':
 *         description: Role assigned successfully
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: Role assigned to user successfully
 *       '404':
 *         description: User or Role not found
 *         content:
 *           application/json:
 *             example:
 *               success: false
 *               message: User or Role not found
 *       '500':
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             example:
 *               success: false
 *               error: Internal Server Error
 */




router.post('/assign-role/:userId/:roleId',assignRole);
export default router