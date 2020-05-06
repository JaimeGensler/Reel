import { useState, useEffect } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import axios from 'axios';
import styled from 'styled-components';

import Heading from '../SectionTitle';
import Form from './Form';
import Info from './Info';

const Wrapper = styled.div`
    width: 100%;
    height: calc(100vh - 64px);
    padding-top: 3rem;
    background-color: #fafafa;
`;
const Title = styled.h1`
    text-align: center;
    font-family: 'Raleway', sans-serif;
    font-size: 3rem;
    color: #8f8f8f;
`;
const A = styled.a`
    display: block;
    text-align: center;
    margin-top: 1rem;
    &:hover,
    :focus {
        text-decoration: underline;
    }
`;
const Content = styled.div`
    width: 19rem;
    padding: 2rem;
    margin: 0 auto;
    background-color: white;
    border-radius: 2px;
    border: 1px solid #8f8f8f;
`;

interface LogInValues {
    username: string;
    password: string;
}
export default function Index() {
    const [loading, setLoading] = useState(false);
    const [infoMessage, setInfoMessage] = useState(0);

    useEffect(() => {
        if (Router.query.redirected_from) setInfoMessage(1);
    }, []);

    const onSubmit = (values: LogInValues) => {
        setLoading(true);
        axios
            .post('/api/login', values)
            .then((res) => {
                localStorage.setItem('reel:token', res.data.token);
                //this won't work the way I want it to
                Router.push((Router.query.redirected_from as string) || '/');
            })
            .catch((err) => setInfoMessage(err.response.status))
            .finally(() => setLoading(false));
    };

    return (
        <Wrapper>
            <Title>Reel</Title>
            <Info code={infoMessage} handleClose={() => setInfoMessage(0)} />
            <Content>
                <Heading>Sign In</Heading>
                <Form handleSubmit={onSubmit} loading={loading} />
            </Content>
            <Link href="/" passHref>
                <A>Back to main page</A>
            </Link>
        </Wrapper>
    );
}
