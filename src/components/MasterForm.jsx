import React, {Component} from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import checkboxes from './checkboxes';
import Checkbox from './Checkbox';

export default class MasterForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentStep: 1,
            checkedItems: new Map(),
            handsOn: false,
            cost: "med",
            addInfo: "",
        }
    }
    _next() {
        let currentStep = this.state.currentStep

        currentStep = currentStep >= 2? 3: currentStep + 1
        this.setState({
            currentStep: currentStep
        })
    }
    _prev() {
        let currentStep = this.state.currentStep
        currentStep = currentStep <= 1? 1: currentStep - 1
        this.setState({
            currentStep: currentStep
        })
    }
    get nextButton(){
        let currentStep = this.state.currentStep;
        if(currentStep <3){
            return (
            <button 
                className="btn btn-primary float-right" 
                type="button" onClick={this._next}>
            Next
            </button>        
            )
        }
        return null;
    }
    get previousButton(){
        let currentStep = this.state.currentStep;
        if(currentStep !== 1 ){
            return (
                <button
                    className="btn btn-secondary"
                    type="button" onClick={this._prev}>
                Previous
                </button>
            )
        }
        return null;
    }
    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }
    handleCheckboxChange(e) {
        const item = e.target.name;
        const isChecked = e.target.checked;
        console.log(this.state.checkedItems);
        
        // this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));

        const newState = Object.assign({}, this.state, { checkedItems: this.state.checkedItems.set(item, isChecked) })

        this.setState({ newState })
      }


    // printServices(map){
    //     servicesArray = []
    //     for (var i = 0, keys = Object.keys(map), ii = keys.length; i < ii; i++) {
    //     console.log(keys[i] + '|' + map[keys[i]].list);
    //     }
    // }
    handleSubmit = (event) => {
        event.preventDefault()
        const { checkedItems, handsOn, cost, additionalInfo } = this.state
        let serviceArr = []
        for (let [k,v] of checkedItems){
            console.log(k)
            serviceArr.push(k)
        }
        // Object.keys(checkedItems).forEach(function(key) {
        //     console.log(key)
        //     serviceArr.push(checkedItems[key])
        // });
        // let printedServices = printServices(checkedItems)
        alert(`Your search details: \n 
        Services: ${serviceArr} \n 
        Arresting: ${handsOn} \n
        Price: ${cost} \n
        Additional Info: ${additionalInfo}
        `) 
    }
    render(){
        let inputs = checkboxes.map(item => {
            console.log(item)
            return(
            <div>
                <label htmlFor={item.name} key={item.key}>
                {item.name}
                </label>
                <Checkbox name={item.name} checked={this.checkedItems.get(item.name)} onChange={this.handleCheckboxChange} />
            </div>
            );
        })
        return(
            <>
            <h3>Select Services Needed</h3>
            <p>and we'll find companies that can provide</p>
        
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
                    value={this.addInfo} 
                    onChange={this.handleChange}
                />
                <button className="btn btn-success btn-block">Submit</button>
            </div> 
            </>

        )
    }
}