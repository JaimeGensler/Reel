import { NextApiRequest, NextApiResponse } from 'next';
import destroySession from '../../db/destroySession';
import checkHasUser from '../../lib/checkHasUser';
import getSessionID from '../../lib/getSessionID';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const sessionID = getSessionID(req.headers.cookie as string);
    destroySession(sessionID);
    res.writeHead(200, {
        'Set-Cookie': `@reel/sessionID=; HttpOnly; Path=/; Max-Age=0`,
    }).end();
};
