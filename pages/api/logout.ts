import { NextApiRequest, NextApiResponse } from 'next';
import hasUser from '../../lib/hasUser';
// import destroySession from '../../db/destroySession';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const shouldClearCookie = hasUser(req.headers.cookie);
    console.log(shouldClearCookie);
    console.log(req.headers.cookie);
    if (shouldClearCookie) {
        res.writeHead(200, {
            'Set-Cookie': `@reel/sessionID=; HttpOnly; Path=/; Max-Age=0`,
        }).end();
    } else {
        res.status(401).end();
    }
};
