import styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';
import Router from 'next/router';
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
    const onSubmit = values => {
        setLoading(true);
        axios
            .post('/api/sessions', values)
            .then(res => {
                localStorage.setItem('reel:token', res.data.token);
                Router.push('/');
            })
            .catch(err => setInfoMessage(err.response.status))
            .finally(() => setLoading(false));
    };

    return (
        <Wrapper>
            <Content>
                <Info
                    code={infoMessage}
                    handleClose={e => setInfoMessage(null)}
                />
                <Heading>Sign In</Heading>
                <Form handleSubmit={onSubmit} loading={loading} />
            </Content>
        </Wrapper>
    );
}
