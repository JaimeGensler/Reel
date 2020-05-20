import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    switch (req.method) {
        case 'GET': {
            // const requests = await ();
            // res.status(200).json(requests);
            // break;
        }
        case 'POST': {
            console.log(req.body);
            break;
        }
        default: {
            res.status(400).end();
        }
    }
};
