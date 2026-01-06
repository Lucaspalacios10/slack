import express from 'express';

const testRouter = express.Router();

testRouter.get(
    '/',
    (request, response) => {
        response.send('test hecho')
    }
);

export default testRouter;