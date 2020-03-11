import jwt from 'jsonwebtoken';
import Router from 'next/router';
const secret = process.env.JWT_SECRET;

function verifyToken(token) {
    try {
        const decoded = jwt.verify(token, secret);
        return decoded;
    } catch (err) {
        return false;
    }
}

const requireAuth = ctx => {
    try {
        const token = ctx.req.headers.cookie;
        const decoded = jwt.verify(token, secret);
        return decoded;
    } catch {
        if (typeof window === 'undefined') {
            console.log(ctx.req);
            ctx.res
                .writeHead(302, {
                    Location: `/login?redirected_from=%2F${ctx.pathname.substring(
                        1,
                    )}`,
                })
                .end();
        } else {
            Router.push({
                pathname: '/login',
                query: { redirected_from: ctx.pathname },
            });
        }
    }
};

export default requireAuth;
