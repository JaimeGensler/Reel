import styled from 'styled-components';
import Heading from '../SectionTitle';
import RequestForm from './Form';

const Wrapper = styled.div`
    height: calc(100vh - 64px);
    width: 100%;
    background-color: #fafafa;
    padding-top: 2rem;
`;
const Content = styled.div`
    width: 60%;
    margin: 0 auto;
`;

export default function Index() {
    return (
        <Wrapper>
            <Content>
                <Heading>Request a Tutor</Heading>
                <RequestForm />
            </Content>
        </Wrapper>
    );
}
