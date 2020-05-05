import { NextApiRequest, NextApiResponse } from 'next';
import User from '../../models/User';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const users = await User.find();
    res.status(200).json(users);
};
