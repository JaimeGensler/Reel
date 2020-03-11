import jwt from 'jsonwebtoken';
const secret = process.env.JWT_SECRET;

export default function verifyToken(token) {
    try {
        const decoded = jwt.verify(token, secret);
        return decoded;
    } catch (err) {
        return false;
    }
}
