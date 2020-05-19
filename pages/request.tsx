import Layout from '../components/Layout';
import Request from '../components/Request';
import withAuth from '../components/withAuth';
import fetchRequestProps from '../lib/fetchRequestProps';

type Props = {
    hasUser: boolean;
    courses: any[];
};
function RequestPage({ hasUser, courses }: Props) {
    return (
        <Layout tabTitle="Reel - Request" hasUser={hasUser}>
            <Request />
        </Layout>
    );
}

export const getServerSideProps = fetchRequestProps();

export default withAuth(RequestPage);
