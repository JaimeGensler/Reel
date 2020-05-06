import Head from 'next/head';
import LogIn from '../components/LogIn/';

export default function LogInPage() {
    return (
        <>
            <Head>
                <title>Reel - Log In</title>
                <link
                    href="https://fonts.googleapis.com/css?family=Lato|Raleway&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <LogIn />
        </>
    );
}
