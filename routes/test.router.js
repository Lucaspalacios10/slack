import express from 'express';
import  authMiddleware from '../middlewares/auth.middlewares.js';

const testRouter = express.Router();

testRouter.get(
    '/',
    (request, response) => {
        response.send('test hecho')
    }
);

testRouter.get(
    '/authorized-test',
    authMiddleware,
    (request, response) => {
        console.log({user_data: request.user})
        return response.json(
            {
                ok: true, 
                status: 200,
                message: 'Test correcto',
                data: null
            }
        )
    }
)

export default testRouter;