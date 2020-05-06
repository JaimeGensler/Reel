import { NextApiRequest, NextApiResponse } from 'next';
import Request from '../../models/Request';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    switch (req.method) {
        case 'GET': {
            const requests = await Request.find();
            res.status(200).json(requests);
            break;
        }
        case 'POST': {
            if (!req.body.nonClassDescription)
                req.body.nonClassDescription = null;
            res.status(200).json('Holy Guacermole!');
            break;
        }
        case 'PATCH': {
            break;
        }
        case 'DELETE': {
            break;
        }
        default:
            res.status(400).end();
            break;
    }
};
