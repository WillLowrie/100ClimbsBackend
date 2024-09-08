import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';

const app: Express = express();

const dotenvPath: string = path.relative(process.cwd(), path.join(__dirname, 'env_vars', '.env'));
dotenv.config({path: dotenvPath});

app.get('/', async (req: Request, res: Response) => {
    try {
        res.status(200).send("Home Page"); // TODO: Implement. 
    } catch {
        res.status(500).send("Internal Server Error");
    }
});

console.log(process.env.PORT);
app.listen(process.env.PORT, () => {
    console.log("Application Running"); // TODO: Implement.
});
