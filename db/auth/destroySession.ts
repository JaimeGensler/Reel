import { q, client } from './fauna';

export default async function destroySession(sessionNum: string) {
    return client
        .query(q.Delete(q.Ref(q.Collection('Sessions'), sessionNum)))
        .then((response: any) => {
            console.log(response);
            return true;
        })
        .catch((err) => {
            console.log(err);
            return true;
        });
}
