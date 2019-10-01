import React, {Component} from 'react';
import { RadioGroup, RadioButton } from 'react-radio-buttons';

export default function Step2(props) {
    if(props.currentStep !== 2 ) {
        return null;
    }
    return (
        <>
        <h3>Answer a few questions about the service you're wanting</h3>
        <p>we'll further refine the results</p>
        <div className="form-group">
            <label htmlFor="RadioGroup">Do you need a company known for going hands on for arresting?</label>
            <RadioGroup horizontal>
                <RadioButton value="yes">
                    Yes
                </RadioButton>
                <RadioButton value="no">
                    No
                </RadioButton>
            </RadioGroup>
            <label htmlFor="RadioGroup">What price range are you looking to pay for services? (typically, higher prices are associated with better a quality of service)</label>
            <RadioGroup horizontal>
                <RadioButton value="low">
                    Low Cost
                </RadioButton>
                <RadioButton value="med">
                    Medium Cost
                </RadioButton>
                <RadioButton value="high">
                    High Cost (premium services)
                </RadioButton>
            </RadioGroup>
        </div>
        </>
    )
};