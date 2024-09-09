import express, { Router } from 'express';
import { getStravaAuthCode } from '../controllers/auth.controller';

const authRouter: Router = express.Router();

authRouter.get('/', getStravaAuthCode)

export { authRouter };