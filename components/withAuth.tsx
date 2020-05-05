import Router from 'next/router';
import ClientOnly from './ClientOnly';

const withAuth = (Page: any) => {
    const Component = (props: any) => {
        const hasUser = !!localStorage.getItem('reel:token');

        if (!hasUser) {
            Router.push({
                pathname: '/login',
                query: { redirected_from: Router.pathname },
            });
            return null;
        } else {
            return <Page {...props} />;
        }
    };

    return (props: any) => {
        return (
            <ClientOnly>
                <Component {...props} />
            </ClientOnly>
        );
    };
};

export default withAuth;
