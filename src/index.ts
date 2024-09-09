import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { authRouter } from './routes/auth.route';
import { generateAuthURL } from './services/auth.service';

const app: Express = express();
app.use(express.json());

const dotenvPath: string = path.relative(process.cwd(), path.join(__dirname, 'env_vars', '.env'));
dotenv.config({path: dotenvPath});

app.use('/auth', authRouter);

app.get('/', async (req: Request, res: Response) => {
    try {
        const authURL: string = generateAuthURL(process.env.STRAVA_CLIENT_ID, process.env.PORT);
        res.status(200).send(`Home Page - ${authURL}`); // TODO: Implement.

    } catch {
        res.status(500).send("Internal Server Error");
    }
});

app.listen(process.env.PORT, () => {
    console.log("Application Running"); // TODO: Implement.
});
