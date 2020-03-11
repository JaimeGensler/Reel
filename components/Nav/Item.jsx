import Link from 'next/link';
import styled from 'styled-components';

const A = styled.a`
    height: 100%;
    padding: 8px 16px;
    display: flex;
    align-items: center;
    font-family: 'Lato', sans-serif;
    color: white;
    text-decoration: none;

    &:hover {
        border-bottom: 2px solid rgba(255, 255, 255, 0.6);
        padding-top: 11px;
        color: rgba(255, 255, 255, 0.6);
    }
`;

export default function Item({ children, href, pseudo }) {
    return (
        <li>
            <Link href={href || '/'} as={pseudo || href || '/'} passHref>
                <A>{children}</A>
            </Link>
        </li>
    );
}
