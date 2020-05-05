import Link from 'next/link';
import { GithubOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const Wrapper = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
`;

const A = styled.a`
    border-radius: 2px;
    font-size: 2rem;
    color: white;
    font-family: 'Raleway', sans-serif;

    &:hover {
        color: rgba(255, 255, 255, 0.6);
    }
    &:focus {
        box-shadow: 0 0 8px 2px rgb(94, 158, 214);
    }
`;

const GitLink = styled(A)`
    margin-left: 1.5rem;
    font-size: 1.25rem;
`;

export default function Title() {
    return (
        <Wrapper>
            <Link href="/" passHref>
                <A>Reel</A>
            </Link>
            <GitLink
                href="https://www.github.com/JaimeGensler/Reel"
                title="View source code on GitHub"
            >
                <GithubOutlined />
            </GitLink>
        </Wrapper>
    );
}
