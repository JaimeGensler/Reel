import { useContext } from 'react';
import { Form, Select } from 'antd';
import coursesContext from '../coursesContext';
const { Item } = Form;
const { Option } = Select;

type Props = {
    handleChange: (value: string) => void;
    loading: boolean;
};
export default function ClassSelect({ handleChange, loading }: Props) {
    const courses = useContext(coursesContext);
    const options = courses.map((course) => {
        return (
            <Option value={course._id} key={course._id}>
                {course.title}
            </Option>
        );
    });
    return (
        <Item
            name="requestClass"
            label="Class"
            rules={[{ required: true, message: 'Please select a class!' }]}
        >
            <Select
                placeholder="Select a Class"
                onChange={handleChange}
                disabled={loading}
            >
                {options}
                <Option value="OTHER">Other (extracurricular)</Option>
            </Select>
        </Item>
    );
}
