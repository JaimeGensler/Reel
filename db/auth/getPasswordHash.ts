import axios from 'axios';
import { queryURL, faunaHeaders } from '../fauna';
import formatGQL from '../utils/formatGQL';
import { success, failure } from '../utils/successFailure';

const passwordQuery = formatGQL`
    query getStudent($username: String!) {
        getStudentByUsername(username: $username) {
            _id
            passwordHash
        }
    }
`;

const getParams = (username: string) => ({
    query: passwordQuery,
    variables: {
        username,
    },
});

export default async function getPasswordHash(username: string) {
    return axios
        .post(queryURL, getParams(username), faunaHeaders)
        .then((res) =>
            res.data.data.getStudentByUsername === null
                ? failure('Username not found.')
                : success(res.data.data.getStudentByUsername),
        )
        .catch((err) => failure(err.data.errors));
}
