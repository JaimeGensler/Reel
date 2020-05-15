import { NextApiRequest, NextApiResponse } from 'next';
import destroySession from '../../db/destroySession';
import hasUser from '../../lib/hasUser';

const getSessionID = (cookie: string) => {
    return (cookie.match(/@reel\/sessionID=([\d]+);?/i) as [any, string])[1];
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const sessionID = getSessionID(req.headers.cookie as string);
    console.log(sessionID);
    if (hasUser(req.headers.cookie)) {
        destroySession(sessionID);
        res.writeHead(200, {
            'Set-Cookie': `@reel/sessionID=; HttpOnly; Path=/; Max-Age=0`,
        }).end();
    } else {
        res.status(401).end();
    }
};
