const applicationPort: string | undefined = '3000'; // process.env.PORT;
const stravaClientID: string | undefined = '110723'; // process.env.STRAVA_CLIENT_ID;

const beginAuthFlow = () => {
    if (typeof stravaClientID == 'undefined' || typeof applicationPort == 'undefined') {
        console.log(`Client ID: ${typeof stravaClientID}`);
        console.log(`Application Port: ${typeof applicationPort}`);
        return 0 // TODO: Throw error here.
    }
    const authFlowURL: string = 'http://www.strava.com/oauth/authorize?' +
                                `client_id=${stravaClientID}&` +
                                'response_type=code&' +
                                `redirect_uri=http://localhost:${applicationPort}/exchange_token&` +
                                'approval_prompt=force&' +
                                'scope=read'; // TODO: Need to redirect to this URL.
    console.log(authFlowURL);
};

export { beginAuthFlow };