import React, {Component} from 'react';

export default function Step3(props) {
    if(props.currentStep !== 3 ) {
        return null;
    }
    return (
        <div className="form-group">
            <label htmlFor="password">password</label>
            <input
                className="form-control"
                id="password"
                name="password"
                type="text"
                placeholder="Enter password"
                value={props.password} 
                onChange={props.handleChange}
            />
        </div>
    )
};