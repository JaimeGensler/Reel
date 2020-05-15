import { NextApiRequest, NextApiResponse } from 'next';
import login from '../../db/login';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const credentials: [string, string] = [
            req.body.username,
            req.body.password,
        ];

        const session = await login(credentials);

        if (session === 'NotFound') {
            res.status(401).json({
                message: 'No matching username & password found',
            });
        } else {
            res.writeHead(200, {
                'Set-Cookie': `@reel/sessionID=${session}; HttpOnly; path=/`,
            }).end();
        }
    } else {
        res.status(400).json({ message: 'Must use POST for this route' });
    }
};
