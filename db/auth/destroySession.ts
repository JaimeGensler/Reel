import axios from 'axios';
import { queryURL, faunaHeaders } from '../fauna';
import formatGQL from '../utils/formatGQL';
import getParams from '../utils/getParams';
import { success, failure } from '../utils/successFailure';
import getSessionID from '../utils/getSessionID';

const destroySessionMutation = formatGQL`
    mutation DestroyASession($sessionID: ID!) {
        deleteSession(id: $sessionID) {
            _id
        }
    }
`;

export default async function destroySession(cookie: string) {
    const sessionID = getSessionID(cookie);
    return axios
        .post(
            queryURL,
            getParams(destroySessionMutation, { sessionID }),
            faunaHeaders,
        )
        .then((res) => success(res.data))
        .catch((err) => failure(err));
}
