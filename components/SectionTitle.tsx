import { Typography } from 'antd';
import styled from 'styled-components';

const Head = styled(Typography.Title)`
    font-family: 'Lato', sans-serif;
`;

type Props = { children: string };
export default function ({ children }: Props) {
    return <Head level={3}>{children}</Head>;
}
