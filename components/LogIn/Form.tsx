import { Form, Input, Button } from 'antd/lib/index';
import { FormProps } from 'antd/lib/form/Form';
import styled from 'styled-components';

const { Item } = Form;
const ButtonItem = styled(Item)`
    margin-bottom: 0;
`;
const Submit = styled(Button)`
    float: right;
`;

interface LogInValues {
    username: string;
    password: string;
}
type Props = {
    handleSubmit: (values: LogInValues) => void;
    loading: boolean;
};
export default function SignIn({ handleSubmit, loading }: Props) {
    return (
        <Form
            onFinish={handleSubmit as FormProps['onFinish']}
            layout="vertical"
            hideRequiredMark
        >
            <Item
                name="username"
                label="Username"
                rules={[
                    { required: true, message: 'Please enter your username' },
                ]}
            >
                <Input placeholder="Username" disabled={loading} />
            </Item>

            <Item
                name="password"
                label="Password"
                rules={[
                    { required: true, message: 'Please enter your password' },
                ]}
            >
                <Input.Password placeholder="Password" disabled={loading} />
            </Item>

            <ButtonItem>
                <Submit
                    type="primary"
                    htmlType="submit"
                    loading={loading}
                    disabled={loading}
                >
                    Sign{loading ? 'ing' : ''} In{loading ? '...' : ''}
                </Submit>
            </ButtonItem>
        </Form>
    );
}
