import { GetServerSideProps } from 'next';
import getStudentCourses from '../db/requests/getStudentCourses';
import checkHasUser from './checkHasUser';

export default function fetchRequestProps(): GetServerSideProps {
    return async (ctx) => {
        const hasUser = checkHasUser(ctx.req.headers.cookie);
        if (hasUser) {
            const userInfo = await getStudentCourses(
                ctx.req.headers.cookie as string,
            );
            const userID = userInfo.data._id;
            const courses = userInfo.data.courses.data;
            return {
                props: {
                    hasUser,
                    userID,
                    courses,
                },
            };
        } else {
            return {
                props: {
                    hasUser,
                },
            };
        }
    };
}
