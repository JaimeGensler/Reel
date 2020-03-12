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

export default function Index() {
    const hasUser =
        typeof window === 'undefined'
            ? false
            : !!localStorage.getItem('reel:token');

    return (
        <Header>
            <Title />
            <Nav>
                <Item href="request">Request a Tutor</Item>
                {hasUser ? <Item href="account">My Account</Item> : null}
                <Item href={`log${hasUser ? 'out' : 'in'}`}>
                    Sign {hasUser ? 'out' : 'in'}
                </Item>
            </Nav>
        </Header>
    );
}
