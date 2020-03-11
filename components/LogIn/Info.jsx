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

export default function Info({ code, handleClose }) {
    if (!code) return null;

    const [type, message] = readCode(code);
    return (
        <Alert
            type={type}
            message={message}
            style={{ marginBottom: '1rem' }}
            showIcon
            closable
            onClose={handleClose}
        />
    );
}
