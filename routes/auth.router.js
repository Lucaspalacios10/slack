import express from 'express';
import userRepository from '../Repository/user.repositery.js';
import authController from '../Controller/auth.controller.js';


const authRouter = express.Router()

authRouter.post(
    '/register',
    authController.post
)

export default authRouter