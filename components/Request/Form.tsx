import { useState } from 'react';
import { Form, Button } from 'antd';
import styled from 'styled-components';
import axios from 'axios';
import Fields from './Fields';

const Group1 = styled.div`
    display: flex;
    justify-content: space-between;
`;
const MiddleItem = styled.div`
    flex: 1;
    margin: 0 8rem 0 2rem;
`;

export default function RequestForm() {
    const [classIsOther, setClassIsOther] = useState(false);
    const [form] = Form.useForm();

    const handleClassChange = (value: string) => {
        if (value === 'OTHER') {
            setClassIsOther(true);
            if (form.getFieldValue('tutorType') === 'CONTENT') {
                form.resetFields(['tutorType']);
            }
        } else setClassIsOther(false);
    };

    const handleSubmit = (values: any) => {
        form.resetFields();
        setClassIsOther(false);
        axios
            .post('/api/requests', values)
            .then((response) => console.log(response));
    };

    return (
        <Form form={form} onFinish={handleSubmit} layout="vertical">
            <Group1>
                <Fields.ClassSelect handleChange={handleClassChange} />
                <MiddleItem>
                    {classIsOther ? <Fields.NonClass /> : null}
                </MiddleItem>
                <Fields.TypeSelect disableContent={classIsOther} />
            </Group1>
            <Fields.Description />
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit Request
                </Button>
            </Form.Item>
        </Form>
    );
}
