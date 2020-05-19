import { GetServerSideProps } from 'next';
import getUserCourses from '../db/getUserCourses';
import checkHasUser from './checkHasUser';
import getSessionID from './getSessionID';

export default function fetchRequestProps(): GetServerSideProps {
    return async (ctx) => {
        const hasUser = checkHasUser(ctx.req.headers.cookie);
        const sessionID = getSessionID(ctx.req.headers.cookie);
        const courses = await getUserCourses(sessionID);
        console.log(courses.data);
        return {
            props: {
                hasUser,
                courses: courses.data,
            },
        };
    };
}
