import { q, client } from './fauna';

const success = (data: any) => ({ ok: true, data });
const failure = (data: any) => ({ ok: false, data });

export default async function getUserCourses(sessionID: string) {
    if (!sessionID) return failure([]);
    return client
        .query(
            q.Map(
                q.Select(
                    ['data', 'courses'],
                    q.Get(
                        q.Select(
                            ['data', 'user'],
                            q.Get(q.Ref(q.Collection('Sessions'), sessionID)),
                        ),
                    ),
                ),
                q.Lambda('course', q.Select(['data'], q.Get(q.Var('course')))),
            ),
        )
        .then((response: any) => {
            console.log(response);
            return success(response);
        })
        .catch((err) => failure(err.name as string));
}
