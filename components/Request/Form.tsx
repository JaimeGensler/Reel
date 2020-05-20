import { useState } from 'react';
import { Form, Button } from 'antd';
import styled from 'styled-components';
import axios from 'axios';
import Fields from './Fields';

const { ClassSelect, NonClass, TypeSelect, Description } = Fields;
const { Item } = Form;
const SelectGroup = styled.div`
    display: flex;
    justify-content: space-between;
`;

export default function RequestForm() {
    const [disableContentTutoring, setDisableContentTutoring] = useState(false);
    const [loading, setLoading] = useState(false);

    const [form] = Form.useForm();

    const handleClassChange = (value: string) => {
        if (value === 'OTHER') {
            setDisableContentTutoring(true);
            if (form.getFieldValue('tutorType') === 'CONTENT') {
                form.resetFields(['tutorType']);
            }
        } else setDisableContentTutoring(false);
    };

    const handleSubmit = (values: any) => {
        setLoading(true);
        axios
            .post('/api/requests', values)
            .then((response) => console.log(response))
            .catch((err) => err)
            .finally(() => setLoading(false));
    };

    return (
        <Form form={form} onFinish={handleSubmit} layout="vertical">
            <SelectGroup>
                <ClassSelect
                    handleChange={handleClassChange}
                    loading={loading}
                />
                <NonClass
                    shouldRender={disableContentTutoring}
                    loading={loading}
                />
                <TypeSelect
                    disableContentTutoring={disableContentTutoring}
                    loading={loading}
                />
            </SelectGroup>
            <Description loading={loading} />
            <Item>
                <Button
                    type="primary"
                    htmlType="submit"
                    disabled={loading}
                    loading={loading}
                >
                    Submit Request
                </Button>
            </Item>
        </Form>
    );
}
