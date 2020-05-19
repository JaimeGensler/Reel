import { NextApiRequest, NextApiResponse } from 'next';
import destroySession from '../../db/auth/destroySession';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    destroySession(req.headers.cookie as string);
    res.writeHead(200, {
        'Set-Cookie': `@reel/sessionID=; HttpOnly; Path=/; Max-Age=0`,
    }).end();
};
