import styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';
import Heading from '../SectionTitle';
import Form from './Form';
import Error from './Error';
import * as cookies from '../../utils/cookies';

const Wrapper = styled.div`
    width: 100vw;
    height: calc(100vh - 64px);
    padding-top: 4rem;

    background-color: #fafafa;
`;

const Content = styled.div`
    width: 20rem;
    padding: 2rem;
    margin: 0 auto;

    background-color: white;
    border-radius: 2px;
    border: 1px solid #8f8f8f;
`;

export default function() {
    const [errorStatus, setErrorStatus] = useState(null);
    const onSubmit = values => {
        axios
            .post('/api/sessions', values)
            .then(res => {
                cookies.set('token', res.data.token);
            })
            .catch(err => setErrorStatus(err.response.status));
    };

    return (
        <Wrapper>
            <Content>
                <Error
                    errorCode={errorStatus}
                    handleClose={e => setErrorStatus(null)}
                />
                <Heading text="Sign In" />
                <Form handleSubmit={onSubmit} />
            </Content>
        </Wrapper>
    );
}
