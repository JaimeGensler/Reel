import styled from 'styled-components';
import ClientOnly from '../ClientOnly';
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

type Props = { hasUser: boolean };
export default function Index({ hasUser }: Props) {
    const myAccount = hasUser ? <Item href="account">My Account</Item> : null;
    const signInOrOut = hasUser ? 'Sign out' : 'Sign in';

    return (
        <Header>
            <Title />
            <Nav>
                <Item href="request">Request a Tutor</Item>
                {myAccount}
                <Item href={hasUser ? 'logout' : 'login'}>{signInOrOut}</Item>
            </Nav>
        </Header>
    );
}
