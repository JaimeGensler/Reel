import User from '../../models/User';
import jwt from 'jsonwebtoken';

export default async (req, res) => {
    if (req.method === 'POST') {
        const { username, password } = req.body;

        const user = await User.find({
            username,
            passwordHash: password,
        });

        if (user.length === 1) {
            const token = jwt.sign(
                { ...user[0]._doc },
                process.env.JWT_SECRET,
                {
                    expiresIn: '5m',
                }
            );
            res.status(200).json({ token });
        } else if (user.length > 1) {
            res.status(500).end();
            console.log('Multiple users returned from database!');
        } else {
            res.status(401).json({
                message: 'No matching username & password found',
            });
        }
    } else {
        res.status(400).json({ message: 'Must use POST for this route' });
    }
};
