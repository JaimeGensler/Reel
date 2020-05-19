import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import createSession from '../../db/auth/createSession';
import getPasswordHash from '../../db/auth/getPasswordHash';

const authError = (res: NextApiResponse) => {
    res.status(401).json({ message: 'No matching username & password found.' });
};
const unknownError = (res: NextApiResponse) => {
    res.status(500).json({
        message: 'Unknown error occured.',
    });
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const { username, password } = req.body;
        const { ok, data } = await getPasswordHash(username);

        if (ok) {
            const isCorrectPassword = await bcrypt
                .compare(password, data.passwordHash)
                .then((res) => res);
            if (isCorrectPassword) {
                const sessionID = await createSession(data._id);
                if (sessionID.ok) {
                    res.writeHead(200, {
                        'Set-Cookie': `@reel/sessionID=${sessionID.data}; HttpOnly; path=/`,
                    }).end();
                } else {
                    unknownError(res);
                }
            } else {
                authError(res);
            }
        } else if (data === 'Username not found.') {
            authError(res);
        } else {
            unknownError(res);
        }
    } else {
        res.status(400).json({ message: 'Must use POST for this route' });
    }
};
