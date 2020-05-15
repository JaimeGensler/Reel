import { NextApiRequest, NextApiResponse } from 'next';
import login from '../../db/createSession';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const credentials: [string, string] = [
            req.body.username,
            req.body.password,
        ];

        const { ok, data } = await login(credentials);

        if (ok) {
            res.writeHead(200, {
                'Set-Cookie': `@reel/sessionID=${data}; HttpOnly; path=/`,
            }).end();
        } else if (data === 'NotFound') {
            res.status(401).json({
                message: 'No matching username & password found.',
            });
        } else {
            res.status(500).json({
                message: 'Unknown error occured.',
            });
        }
    } else {
        res.status(400).json({ message: 'Must use POST for this route' });
    }
};
