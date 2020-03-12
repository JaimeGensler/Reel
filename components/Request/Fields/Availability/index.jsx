import { useState } from 'react';
import styled from 'styled-components';
import Day from './Day';

const Week = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    width: 100%;
`;

export default function Availability(props) {
    return (
        <Week>
            <h3>Sunday</h3>
            <h3>Monday</h3>
            <h3>Tuesday</h3>
            <h3>Wednesday</h3>
            <h3>Thursday</h3>
            <h3>Friday</h3>
            <h3>Saturday</h3>
        </Week>
    );
}
