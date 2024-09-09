import { Request, Response } from 'express';

const getStravaAuthCode = async (req: Request, res: Response) => {
    try{
        if (!req.query.code || !req.query.scope) {
            // Get user to try again.
            res.status(403).send('No auth code found.');
        } else if (req.query.scope != 'read,activity:read_all,read_all') {
            // Get user to reauthenticate with elevated permissions for the app.
            res.status(403).send('Incorrect scope.')
        } else {
            const tempCode: string = req.query.code;
            const scope: string = req.query.scope;
            // Make call to get access and refresh token then save to database.
            res.status(200).json({code: tempCode, scope: scope});
        }
    } catch (err) {
        if (err instanceof Error) {
            res.status(500).json({message: err.message});
        } else {
            res.status(500).json({message: err});
        }
    }
}

const getAccesssAndRefreshCode = async (req: Request, res: Response) => {
    return
}

export { getStravaAuthCode, getAccesssAndRefreshCode };