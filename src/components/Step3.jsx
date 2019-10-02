import React, {Component} from 'react';

export default function Step3(props) {
    if(props.currentStep !== 3 ) {
        return null;
    }
    return (
        <>
        <h3>Is the information correct?</h3>
        <p>Anything else the service provider should know?</p>
        <div className="form-group">
            <label htmlFor="info">Is there additional information that the service provider should know about?</label>
            <input
                className="form-control"
                id="addInfo"
                name="addInfo"
                type="text"
                placeholder="Add Important Info"
                value={props.addInfo} 
                onChange={props.handleChange}
            />
            <button className="btn btn-success btn-block">Submit</button>
        </div> 
        </>
    )
};