import React, {Component} from 'react';

export default function Step3(props) {
    if(props.currentStep !== 3 ) {
        return null;
    }
    return (
        <>
        <h3>Is the information corrent?</h3>
        <p>Anything else the service provider should know?</p>
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
            <button className="btn btn-success btn-block">Submit</button>
        </div> 
        </>
    )
};