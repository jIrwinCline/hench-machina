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
            username: '',
            password: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this._next = this._next.bind(this)
        this._prev = this._prev.bind(this)
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
    handleSubmit = (event) => {
        event.preventDefault()
        const { email, username, password } = this.state
        alert(`Your registration detail: \n 
        Email: ${email} \n 
        Username: ${username} \n
        Password: ${password}`)
    }
    render(){
        return (
            <>
            <p>Step {this.state.currentStep}</p>

            <form onSubmit={this.handleSubmit}>
                <Step1
                    currentStep={this.state.currentStep}
                    handleCheckboxChange={this.handleCheckboxChange}
                    checkedItems={this.state.checkedItems}
                />
                <Step2 
                    currentStep={this.state.currentStep}
                    handleChange={this.handleChange}
                    handsOn={this.state.handsOn}
                    cost={this.state.cost}
                />
                <Step3 
                    currentStep={this.state.currentStep}
                    handleChange={this.handleChange}
                    password={this.state.password}
                />
            </form>
            {this.previousButton}
            {this.nextButton}
            </>
        )
    }
};