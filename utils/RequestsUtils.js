const RequestsUtils = {
    baseUrl: "https://admin.af6.at/api/",

    makeRequest: async ({endpoint, type = "GET", body, headers = {},}) => {
        try {
            const res = await fetch(`${RequestsUtils.baseUrl}${endpoint}`, {
                method: type,
                body: body ? JSON.stringify(body) : null,
            });
            let isDone = res.status.toString().startsWith('2');
            return {isDone: isDone, status: res.status, result: await res.json(),};
        } catch (err) {
            console.error(err);
        }
    },

    professionality: async () => {
        return await RequestsUtils.makeRequest({
            endpoint: 'data/professionality'
        });
    },
    players: async token => {
        return await RequestsUtils.makeRequest({
            endpoint: 'club/players',
            type: "POST",
            body: {
                token,
            },
        });
    },
    player_id: async () => {
        return await RequestsUtils.makeRequest({
            endpoint: 'club/player_id',
        });
    },
    player: async id => {
        return await RequestsUtils.makeRequest({
            endpoint: `club/player/${id}`,
        });
    },
    leagues: async id => {
        return await RequestsUtils.makeRequest({
            endpoint: 'data/leagues',
            type: "POST",
            body: {
                countryId: id,
            },
        });
    },
    all: async () => {
        return await RequestsUtils.makeRequest({
            endpoint: 'data/all'
        });
    },
    register: async data => {
        return await RequestsUtils.makeRequest({
            endpoint: 'auth/register',
            type: "POST",
            body: data,
        });
    },
    validate: async ({email, code}) => {
        return await RequestsUtils.makeRequest({
            endpoint: 'auth/validate',
            type: "POST",
            body: {email, code},
        });
    },
    login: async loginData => {
        return await RequestsUtils.makeRequest({
            endpoint: 'auth/login',
            type: "POST",
            body: loginData,
        });
    },
    check: async token => {
        return await RequestsUtils.makeRequest({
            endpoint: 'auth/check',
            type: "POST",

            body: {
                auth: token,
            },
        });
    },
    editProfile: async ({body, token}) => {
        body.auth = token;
        return await RequestsUtils.makeRequest({
            endpoint: 'auth/editProfile',
            body: body,
            type: "POST",
        });
    },
    editProfileClub: async ({body, token}) => {
        body.auth = token;
        return await RequestsUtils.makeRequest({
            endpoint: 'auth/editProfileClub',
            body: body,
            type: "POST",
        });
    },
    clubRequest: async body => {

        return await RequestsUtils.makeRequest({
            endpoint: 'club/request',
            body: body,
            type: "POST",
        });
    },
    clubRequests: async token => {

        return await RequestsUtils.makeRequest({
            endpoint: 'club/requests',
            body: {token},
            type: "POST",
        });
    },
    playerRequests: async token => {

        return await RequestsUtils.makeRequest({
            endpoint: 'player/requests',
            body: {token},
            type: "POST",
        });
    },
    accept: async (requestId, token) => {

        return await RequestsUtils.makeRequest({
            endpoint: 'player/accept',
            body: {token, requestId},
            type: "POST",
        });
    }
}
export default RequestsUtils;