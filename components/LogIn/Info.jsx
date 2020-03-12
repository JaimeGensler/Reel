import styled from 'styled-components';
import { Alert } from 'antd';

const readCode = num => {
    switch (num) {
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

const Flash = styled(Alert)`
    width: 19rem;
    margin: 0 auto;
`;

export default function Info({ code, handleClose }) {
    if (!code) return null;

    const [type, message] = readCode(code);
    return (
        <Flash
            type={type}
            message={message}
            style={{ marginBottom: '1rem' }}
            showIcon
            closable
            onClose={handleClose}
        />
    );
}
