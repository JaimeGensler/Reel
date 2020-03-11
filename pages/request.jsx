import Layout from '../components/Layout';
import Request from '../components/Request';
import withAuth from '../components/withAuth';

function RequestPage() {
    return (
        <Layout tabTitle="Reel - Request">
            <Request />
        </Layout>
    );
}

export default withAuth(RequestPage);
