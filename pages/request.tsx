import Layout from '../components/Layout';
import Request from '../components/Request';
import coursesContext from '../components/Request/coursesContext';
import withAuth from '../components/withAuth';
import fetchRequestProps from '../lib/fetchRequestProps';

const { Provider } = coursesContext;

type Props = {
    hasUser: boolean;
    courses: any[];
};

function RequestPage({ hasUser, courses }: Props) {
    return (
        <Layout tabTitle="Reel - Request" hasUser={hasUser}>
            <Provider value={courses}>
                <Request />
            </Provider>
        </Layout>
    );
}

export const getServerSideProps = fetchRequestProps();

export default withAuth(RequestPage);
