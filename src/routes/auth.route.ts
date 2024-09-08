import express, { Router } from 'express';

const authRouter: Router = express.Router();

authRouter.get('/', async (req, res) => {
    console.log('Auth endpoint called');
    res.status(200).send("Auth router working.");
})

module.exports = authRouter;