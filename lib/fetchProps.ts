import { GetServerSideProps } from 'next';
import checkHasUser from './checkHasUser';

export default function fetchProps(): GetServerSideProps {
    return async (ctx) => {
        return {
            props: {
                hasUser: checkHasUser(ctx.req.headers.cookie),
            },
        };
    };
}
