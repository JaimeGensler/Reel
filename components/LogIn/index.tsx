import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Router from 'next/router';
import axios from 'axios';
import Heading from '../SectionTitle';
import Form from './Form';
import Info from './Info';

const Wrapper = styled.div`
    width: 100%;
    height: calc(100vh - 64px);
    padding-top: 4rem;

    background-color: #fafafa;
`;

const Content = styled.div`
    width: 19rem;
    padding: 2rem;
    margin: 0 auto;

    background-color: white;
    border-radius: 2px;
    border: 1px solid #8f8f8f;
`;

export default function Index() {
    const [loading, setLoading] = useState(false);
    const [infoMessage, setInfoMessage] = useState(null);

    useEffect(() => {
        if (Router.query.redirected_from) setInfoMessage(1);
    }, []);

    const onSubmit = values => {
        setLoading(true);
        axios
            .post('/api/login', values)
            .then(res => {
                localStorage.setItem('reel:token', res.data.token);
                Router.push(Router.query.redirected_from || '/');
            })
            .catch(err => setInfoMessage(err.response.status))
            .finally(() => setLoading(false));
    };

    return (
        <Wrapper>
            <Info code={infoMessage} handleClose={e => setInfoMessage(null)} />
            <Content>
                <Heading>Sign In</Heading>
                <Form handleSubmit={onSubmit} loading={loading} />
            </Content>
        </Wrapper>
    );
}
