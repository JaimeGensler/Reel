import axios from 'axios';
import { queryURL, faunaHeaders } from '../fauna';
import formatGQL from '../utils/formatGQL';
import getParams from '../utils/getParams';
import { success, failure } from '../utils/successFailure';

const getStudentPasswordQuery = formatGQL`
    query getStudent($username: String!) {
        getStudentByUsername(username: $username) {
            _id
            passwordHash
        }
    }
`;

export default async function getPasswordHash(username: string) {
    return axios
        .post(
            queryURL,
            getParams(getStudentPasswordQuery, { username }),
            faunaHeaders,
        )
        .then((res) =>
            res.data.data.getStudentByUsername === null
                ? failure('Username not found.')
                : success(res.data.data.getStudentByUsername),
        )
        .catch((err) => failure(err));
}
