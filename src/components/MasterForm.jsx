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
            // console.log(item)
            return(
            <div>
                
                <Checkbox name={item.name} checked={this.props.checkedItems.get(item.name)} onChange={this.props.handleCheckboxChange} />
            </div>
            );
        })
        return(
            <div className="container-fluid main-padding text-box">
                <form onSubmit={this.props.handleSubmit}>
                    <div className="row">
                        <div className="col-md-5 col-center">
                            <h3>Select Services Needed</h3>
                            <p>and we'll find companies that can provide</p>
                            <div className="checkboxes">
                               {inputs}
                            </div>
                        </div>
                        <div className="col-md-1 col-center">
                            <div className="vertical">
                                 
                            </div>
                        </div>
                        <div className="col-md-5 col-center">
                        <h3>Answer a few questions about the service you're wanting</h3>
                        <p>we'll further refine the results</p>
                            <div className="form-group">
                                <label htmlFor="RadioGroup">Do you need a company known for going hands on for arresting?</label>
                                <RadioGroup onChange={this.props.onHandsOnChange} horizontal name="handsOn">
                                    <RadioButton value="true">
                                        Yes
                                    </RadioButton>
                                    <RadioButton value="false">
                                        No
                                    </RadioButton>
                                </RadioGroup>
                                <label htmlFor="RadioGroup">What price range are you looking to pay for services? (typically, higher prices are associated with better a quality of service)</label>
                                <RadioGroup onChange={this.props.onPriceChange} horizontal>
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
                        </div>
                    </div>
                    <div className="">
                        <div className="form-group">
                            <div className="col-med-12 col-center">
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
                                <button className="submit-button button button--aylen button--border-thick button--inverted button--text-upper button--size-s">Submit</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}