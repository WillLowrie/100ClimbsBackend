import { URL } from 'url';

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

const addAuthedUser = (authTokenResponse: Response) => {
    return;
}

const processAuthError = (authError: Error) => {
    return;
}

const getAccesssAndRefreshCode = (authCode: string) => {
    const authURL: URL = new URL('https://www.strava.com/api/v3/oauth/token');
    const authSearchParams: object = {
        client_id: '110723',
        client_secret: '<insert_secret>',
        code: authCode,
        grant_type: 'authorization_code'
    };
    for (const searchParam in authSearchParams) {
        authURL.searchParams.append(searchParam, authSearchParams[searchParam]);
    }
    console.log(authURL);
    // fetch(authURL.toString())
    // .then(response => addAuthedUser(response))
    // .catch(err => processAuthError(err))
}

getAccesssAndRefreshCode('12345')

export { generateAuthURL, getAccesssAndRefreshCode };