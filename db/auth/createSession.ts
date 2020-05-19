import axios from 'axios';
import { queryURL, faunaHeaders } from '../fauna';
import formatGQL from '../utils/formatGQL';
import { success, failure } from '../utils/successFailure';

const createSessionMutation = formatGQL`
    mutation CreateASession($studentID: SessionInput!) {
        createSession(data: $studentID) {
            _id
        }
    }
`;

const getParams = (studentID: any) => ({
    query: createSessionMutation,
    variables: {
        studentID,
    },
});

export default async function createSession(userID: string) {
    const studentInput = { user: { connect: userID } };
    return axios
        .post(queryURL, getParams(studentInput), faunaHeaders)
        .then((res) => success(res.data.data.createSession._id))
        .catch((err) => failure(err.data.errors));
}
