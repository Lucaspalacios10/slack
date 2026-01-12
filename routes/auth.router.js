import express from 'express';
import userRepository from '../Repository/user.repository.js';
import authController from '../Controller/auth.controller.js';


const authRouter = express.Router()

authRouter.post(
    '/register',
    authController.register
)

authRouter.post(
    '/login',
    authController.login
)

authRouter.get(
    '/verify-email',
    authController.verifyEmail
)

export default authRouter