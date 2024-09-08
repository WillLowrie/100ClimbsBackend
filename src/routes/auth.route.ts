import express, { Router } from 'express';
import {beginAuthFlow} from '../controllers/auth.controller';

const authRouter: Router = express.Router();

authRouter.get('/', beginAuthFlow)

authRouter.get('/:state&:code&:scope')

export {authRouter};