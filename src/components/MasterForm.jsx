import React, {Component} from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

export default class MasterForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentStep: 1,
            email: '',
            username: '',
            password: '',
        }
        this.handleChange = this.handleChange.bind(this)
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
            <h1>a wizard form!</h1>
            <p>Step {this.state.currentStep}</p>

            <form onSubmit={this.handleSubmit}>
                <Step1
                    currentStep={this.state.currentStep}
                    handleChange={this.handleChange}
                    email={this.state.email}
                />
                <Step2 
                    currentStep={this.state.currentStep}
                    handleChange={this.handleChange}
                    username={this.state.username}
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