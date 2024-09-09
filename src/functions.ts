const generateAuthURL = (clientID: string|undefined, applicationPort:string|undefined): string => {
    if (typeof clientID == 'undefined' || typeof applicationPort == 'undefined') {
        console.log(`Client ID: ${typeof clientID}`);
        console.log(`Application Port: ${typeof applicationPort}`);
        return 'http://localhost:3000/';
    }
    const authFlowURL: string = 'http://www.strava.com/oauth/authorize?' +
                                `client_id=${clientID}&` +
                                'response_type=code&' +
                                `redirect_uri=http://localhost:${applicationPort}/auth&` +
                                'approval_prompt=auto&' +
                                'scope=read_all,activity:read_all';
    return authFlowURL;
};

export { generateAuthURL };