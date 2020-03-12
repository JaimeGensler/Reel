import Request from '../../models/User';

export default async (req, res) => {
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
