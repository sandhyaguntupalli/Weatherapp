import React from 'react';
import Button from '../../components/UI/Button';

const weatherInput = (props) => {
    
    return (
        <div>
            <h2>Weather App</h2>
            <p>
                <label>Enter City</label>
                <input type="text" onChange={props.cityChanged}/>
            </p>
            <Button clicked={props.formSubmit} >Submit</Button>
        </div>
    )
}

export default weatherInput;