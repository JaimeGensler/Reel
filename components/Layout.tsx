import Head from 'next/head';
import styled from 'styled-components';
import Nav from './Nav';

const Main = styled.main`
    padding-top: 64px;
`;

type Props = {
    children: JSX.Element;
    tabTitle: string;
};
export default function Layout({ children, tabTitle }: Props) {
    return (
        <>
            <Head>
                <title>{tabTitle}</title>
                <link
                    href="https://fonts.googleapis.com/css?family=Lato|Raleway&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <Nav />
            <Main>{children}</Main>
        </>
    );
}
