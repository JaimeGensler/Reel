import { Form, Input } from 'antd';
const { Item } = Form;
const { TextArea } = Input;

type Props = { loading: boolean };
export default function Description({ loading }: Props) {
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
            <TextArea
                disabled={loading}
                rows={5}
                placeholder="What do you need help with?"
            />
        </Item>
    );
}
