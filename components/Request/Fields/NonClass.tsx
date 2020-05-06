import styled from 'styled-components';
import { Form, Input } from 'antd';
const { Item } = Form;

const Container = styled.div`
    flex: 1;
    margin: 0 8rem 0 2rem;
`;

type Props = { shouldRender: boolean };
export default function NonClass({ shouldRender }: Props) {
    const contents = !shouldRender ? null : (
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
    return <Container>{contents}</Container>;
}
