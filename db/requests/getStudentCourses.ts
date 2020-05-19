import axios from 'axios';
import { queryURL, faunaHeaders } from '../fauna';
import formatGQL from '../utils/formatGQL';
import getParams from '../utils/getParams';
import { success, failure } from '../utils/successFailure';
import getSessionID from '../utils/getSessionID';

const getStudentCoursesQuery = formatGQL`
    query getSession($sessionID: ID!) {
        findSessionByID(id: $sessionID) {
            user {
                _id
                courses {
                    data {
                        _id
                        title
                    }
                }
            }
        }
    }
`;

export default async function getStudentCourses(cookie: string) {
    const sessionID = getSessionID(cookie);
    return axios
        .post(
            queryURL,
            getParams(getStudentCoursesQuery, { sessionID }),
            faunaHeaders,
        )
        .then((res) => {
            return res.data.data.findSessionByID === null
                ? failure('Student not found.')
                : success(res.data.data.findSessionByID.user);
        })
        .catch((err) => failure(err));
}
