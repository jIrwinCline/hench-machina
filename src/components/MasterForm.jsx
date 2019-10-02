import React, {Component} from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import checkboxes from './checkboxes';
import Checkbox from './Checkbox';
import { RadioGroup, RadioButton } from 'react-radio-buttons';


export default class MasterForm extends Component {
    constructor(props){
        super(props)
    }
    render(){
        let inputs = checkboxes.map(item => {
            console.log(item)
            return(
            <div>
                <label htmlFor={item.name} key={item.key}>
                {item.name}
                </label>
                <Checkbox name={item.name} checked={this.props.checkedItems.get(item.name)} onChange={this.props.handleCheckboxChange} />
            </div>
            );
        })
        return(
            <div className="container-fluid">
            <h3>Select Services Needed</h3>
            <p>and we'll find companies that can provide</p>
            <form onSubmit={this.handleSubmit}>
                {inputs}
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
                <p>Anything else the service provider should know?</p>
                <div className="form-group">
                    <label htmlFor="info">Is there additional information that the service provider should know about?</label>
                    <input
                        className="form-control"
                        id="addInfo"
                        name="addInfo"
                        type="text"
                        placeholder="Add Important Info"
                        value={this.props.addInfo} 
                        onChange={this.props.handleChange}
                    />
                    <button className="btn btn-success btn-block">Submit</button>
                </div> 
            </form>
            </div>
        )
    }
}