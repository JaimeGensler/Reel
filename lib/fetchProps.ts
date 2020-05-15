import { GetServerSideProps } from 'next';
import hasUser from './hasUser';

export default function fetchProps(): GetServerSideProps {
    return async (ctx) => {
        return {
            props: {
                hasUser: hasUser(ctx.req.headers.cookie),
            },
        };
    };
}
