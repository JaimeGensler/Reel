import Layout from '../components/Layout';
import Request from '../components/Request';
import withAuth from '../components/withAuth';
import requireAuth from '../utils/requireAuth';

function RequestPage() {
    return (
        <Layout tabTitle="Reel - Request">
            <Request />
        </Layout>
    );
}

// RequestPage.getInitialProps = async ctx => {
//     const user = requireAuth(ctx);

//     return { jaime: 'gensler' };
// };

export default withAuth(RequestPage);
