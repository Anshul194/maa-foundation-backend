const express = require('express');
const volunteer = require('../controller/volunteerController');
const volunteerRouter = express.Router();

/**
 * @swagger
 * /create/volunteer:
 *   post:
 *     summary: Create a new volunteer
 *     tags: 
 *       - Volunteers
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the volunteer
 *                 example: John Doe
 *               email:
 *                 type: string
 *                 description: The email of the volunteer
 *                 example: john.doe@example.com
 *               phoneNumber:
 *                 type: string
 *                 description: The phone number of the volunteer
 *                 example: 123-456-7890
 *               dob:
 *                 type: string
 *                 format: date
 *                 description: The date of birth of the volunteer
 *                 example: 1990-01-01
 *               address:
 *                 type: string
 *                 description: The address of the volunteer
 *                 example: 123 Main St, Anytown, USA
 *               reason:
 *                 type: string
 *                 description: The reason for volunteering
 *                 example: Want to help the community
 *               agreed:
 *                 type: boolean
 *                 description: Agreement to terms and conditions
 *                 example: true
 *     responses:
 *       201:
 *         description: Volunteer created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The volunteer ID
 *                   example: d5fE_asz
 *                 name:
 *                   type: string
 *                   description: The name of the volunteer
 *                   example: John Doe
 *                 email:
 *                   type: string
 *                   description: The email of the volunteer
 *                   example: john.doe@example.com
 *                 phoneNumber:
 *                   type: string
 *                   description: The phone number of the volunteer
 *                   example: 123-456-7890
 *                 dob:
 *                   type: string
 *                   format: date
 *                   description: The date of birth of the volunteer
 *                   example: 1990-01-01
 *                 address:
 *                   type: string
 *                   description: The address of the volunteer
 *                   example: 123 Main St, Anytown, USA
 *                 reason:
 *                   type: string
 *                   description: The reason for volunteering
 *                   example: Want to help the community
 *                 agreed:
 *                   type: boolean
 *                   description: Agreement to terms and conditions
 *                   example: true
 *       400:
 *         description: Bad request
 */
volunteerRouter.post('/create/volunteer', volunteer.createVolunteer);

module.exports = volunteerRouter;
