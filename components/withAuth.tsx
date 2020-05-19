import Router from 'next/router';

const withAuth = (Page: any) => {
    const Component = (props: any) => {
        const { hasUser } = props;

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

    return (props: any) => <Component {...props} />;
};

export default withAuth;
