import { q, client } from './fauna';

const success = (data: string) => ({ ok: true, data });
const failure = (data: string) => ({ ok: false, data });

//Credentials are passed here from login API route in format [username, hashedPassword]
type Credentials = [string, string];

export default async function createSession(credentials: Credentials) {
    return client
        .query(
            q.Select(
                'ref',
                q.Create(q.Collection('Sessions'), {
                    data: {
                        user_ref: q.Select(
                            'ref',
                            q.Get(q.Match(q.Index('login'), credentials)),
                        ),
                    },
                }),
            ),
        )
        .then((response: any) => success(response.value.id as string))
        .catch((err) => failure(err.name as string));
}
