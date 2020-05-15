import { q, client } from './fauna';

//Credentials are passed here from login API route in format [username, password]
type Credentials = [string, string];
const login = (credentials: Credentials) => {
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
        .then((response: any) => {
            console.log('got a good response');
            return response.value.id;
        })
        .catch((err) => err.name);
};

export default login;
