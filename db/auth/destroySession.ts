import axios from 'axios';
import formatGQL from '../utils/formatGQL';
import { queryURL, faunaHeaders } from '../fauna';
import { success, failure } from '../utils/successFailure';
import getSessionID from '../utils/getSessionID';

const destroySessionMutation = formatGQL`
    mutation DestroyASession($sessionID: ID!) {
        deleteSession(id: $sessionID) {
            _id
        }
    }
`;

const getParams = (sessionID: any) => ({
    query: destroySessionMutation,
    variables: {
        sessionID,
    },
});

export default async function destroySession(cookie: string) {
    const sessionID = getSessionID(cookie);
    return axios
        .post(queryURL, getParams(sessionID), faunaHeaders)
        .then((res) => success(res.data))
        .catch((err) => failure(err));
}
