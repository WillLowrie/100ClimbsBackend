import { Request, Response } from 'express';
import { getAccesssAndRefreshCode } from '../services/auth.service';

const getStravaAuthCode = async (req: Request, res: Response) => {
    try{
        if (!req.query.code || !req.query.scope) {
            // Get user to try again.
            res.status(403).json({
                auth_status: 'Failed',
                message: 'Unable to access scope or code'
            });
        } else if (req.query.scope != 'read,activity:read_all,read_all') {
            // Get user to reauthenticate with elevated permissions for the app.
            res.status(403).json({
                auth_status: 'Failed',
                message: 'Required access scope not granted'
            })
        } else {
            res.status(200).json({
                auth_status: 'Success',
                message: 'Auth code successfully received'
            });
            getAccesssAndRefreshCode(req.query.code.toString());
        }
    } catch (err) {
        if (err instanceof Error) {
            res.status(500).json({message: err.message});
        } else {
            res.status(500).json({message: err});
        }
    }
}

export { getStravaAuthCode };