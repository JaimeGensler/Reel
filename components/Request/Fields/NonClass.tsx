import { Form, Input } from 'antd';
const { Item } = Form;

export default function NonClass() {
    return (
        <Item
            name="nonClassDescription"
            label="What do you need a tutor for?"
            rules={[
                {
                    required: true,
                    message:
                        'Please give a brief description of what this tutoring session is for!',
                },
            ]}
        >
            <Input placeholder="(e.g. School Newspaper Submission, Scholarship Essay, etc.)" />
        </Item>
    );
}
