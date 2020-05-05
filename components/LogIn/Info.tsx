import styled from 'styled-components';
import { Alert } from 'antd';

const Flash = styled(Alert)`
    width: 19rem;
    margin: 0 auto 1rem auto;
`;
const readCode = (code: number) => {
    switch (code) {
        case 1:
            return ['info', "You'll need to sign in to view that page."];
        case 401:
            return ['error', 'Incorrect username or password.'];
        case 500:
            return ['error', 'A problem occcured while trying to sign in.'];
        default:
            return [
                'error',
                'An unexpected error occured. Please try again later',
            ];
    }
};

type Props = {
    code: number;
    handleClose: () => void;
};
export default function Info({ code, handleClose }: Props) {
    if (code === 0) return null;

    const [type, message] = readCode(code);
    return (
        <Flash
            type={type as 'success' | 'info' | 'warning' | 'error'}
            message={message}
            showIcon
            closable
            onClose={handleClose}
        />
    );
}
