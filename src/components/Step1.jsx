import React, {Component} from 'react';

export default function Step1(props) {
    if (props.currentStep !== 1) {
        return null
    }
    return (
        <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
                className="form-control"
                id="email"
                name="email"
                type="text"
                placeholder="Enter email"
                value={props.email} // Prop: The email input data
                onChange={props.handleChange} // Prop: Puts data into state
            />
        </div>
    )
};