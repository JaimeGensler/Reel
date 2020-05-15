import Layout from '../components/Layout';
import fetchProps from '../lib/fetchProps';

type Props = {
    hasUser: boolean;
};
export default function Home({ hasUser }: Props) {
    return (
        <Layout tabTitle="Reel - Home" hasUser={hasUser}>
            <h1>Front Page</h1>
        </Layout>
    );
}

export const getServerSideProps = fetchProps();
