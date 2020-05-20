import { Form, Select } from 'antd';
const { Item } = Form;
const { Option } = Select;

type Props = {
    disableContentTutoring: boolean;
    loading: boolean;
};
export default function TypeSelect({ disableContentTutoring, loading }: Props) {
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
            <Select placeholder="Select a Tutoring Type" disabled={loading}>
                <Option value="WRITING">Writing</Option>
                <Option value="CONTENT" disabled={disableContentTutoring}>
                    Content
                </Option>
            </Select>
        </Item>
    );
}
