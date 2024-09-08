import { Request, Response } from 'express';

const applicationPort: string | undefined = '3000'; // process.env.PORT;
const stravaClientID: string | undefined = '110723'; // process.env.STRAVA_CLIENT_ID;

const beginAuthFlow = () => { // Only needed on the front end.
    if (typeof stravaClientID == 'undefined' || typeof applicationPort == 'undefined') {
        console.log(`Client ID: ${typeof stravaClientID}`);
        console.log(`Application Port: ${typeof applicationPort}`);
        return 0 // TODO: Throw error here.
    }
    const authFlowURL: string = 'http://www.strava.com/oauth/authorize?' +
                                `client_id=${stravaClientID}&` +
                                'response_type=code&' +
                                `redirect_uri=http://localhost:${applicationPort}/test&` +
                                'approval_prompt=force&' +
                                'scope=read'; // TODO: Need to redirect to this URL (do this on the front end).
    console.log(authFlowURL);
};

const getAccessToken = async (req: Request, res: Response) => { // TODO: Maybe do something with 'state' param.
    try{
        if (!req.params) {
            console.log('No temp code found.');
        }
        console.log(req.params);
        const tempCode = req.params.code;
        const scope = req.params.scope;
        // Make call to get access and refresg token then save to database.
        res.status(200).json({code: tempCode, scope: scope});
    } catch (error) {
        res.status(500).json({message: error.message);
    }
}

export { beginAuthFlow, getAccessToken };