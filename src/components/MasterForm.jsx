import React, {Component} from 'react';
import Step1 from 'Step1';
import Step2 from 'Step2';
import Step3 from 'Step3';

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
            <div>

            </div>
        )
    }
};