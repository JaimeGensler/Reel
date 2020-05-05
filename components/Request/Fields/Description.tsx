import { Form, Input } from 'antd';
const { Item } = Form;
const { TextArea } = Input;

export default function Description() {
    return (
        <Item
            name="description"
            label="Description"
            rules={[
                {
                    required: true,
                    message:
                        'Please give a brief description of what you need help with!',
                },
            ]}
        >
            <TextArea rows={5} placeholder="What do you need help with?" />
        </Item>
    );
}
