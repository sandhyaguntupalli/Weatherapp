import React from 'react';

const displayTemperature = (props) => (
    <label>{props.children + String.fromCharCode(176)}</label>
);

export default displayTemperature;