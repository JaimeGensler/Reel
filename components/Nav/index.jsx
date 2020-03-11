import styled from 'styled-components';
import Title from './Title';
import Item from './Item';

const Header = styled.header`
    position: fixed;
    width: 100vw;
    height: 64px;
    padding: 0 8px;

    display: flex;

    background-color: #675285;
    border-bottom: 1px solid black;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.5);
`;
const Nav = styled.nav`
    list-style-type: none;
    display: flex;
`;

export default function() {
    return (
        <Header>
            <Title />
            <Nav>
                <Item text="Request a Tutor" href="request" />
                <Item text="Sign In" href="sign_in" />
            </Nav>
        </Header>
    );
}
