import { Form, Select } from 'antd';
const { Item } = Form;
const { Option } = Select;

export default function TypeSelect() {
    return (
        <Item
            name="tutorType"
            label="Tutoring Type"
            rules={[
                {
                    required: true,
                    message: 'Please select the type of tutor you need!',
                },
            ]}
        >
            <Select placeholder="Select a Tutoring Type">
                <Option value="WRITING">Writing</Option>
                <Option value="CONTENT">Content</Option>
            </Select>
        </Item>
    );
}
