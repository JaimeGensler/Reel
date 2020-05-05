import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import User from '../../models/User';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const { username, password } = req.body;

        const user = await User.findOne({
            username,
            passwordHash: password,
        });

        if (user) {
            const token = jwt.sign(
                { id: user._id },
                process.env.JWT_SECRET as string,
                {
                    expiresIn: '10m',
                },
            );

            res.status(200).json({ token });
        } else {
            res.status(401).json({
                message: 'No matching username & password found',
            });
        }
    } else {
        res.status(400).json({ message: 'Must use POST for this route' });
    }
};
