import { Typography } from 'antd';
import styled from 'styled-components';

const Head = styled(Typography.Title)`
    font-family: 'Lato', sans-serif;
`;

export default function({ children }) {
    return <Head level={3}>{children}</Head>;
}
