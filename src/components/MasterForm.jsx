import React, {Component} from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import checkboxes from './checkboxes';
import Checkbox from './Checkbox';
import { connect } from 'react-redux'


class MasterForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentStep: 1,
            checkedItems: new Map(),
            handsOn: false,
            cost: "med",
            addInfo: "",
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this._next = this._next.bind(this)
        this._prev = this._prev.bind(this)
    }
    _next() {
        // let currentStep = this.state.currentStep

        // currentStep = currentStep >= 2? 3: currentStep + 1
        // this.setState({
        //     currentStep: currentStep
        // })
        this.props.dispatch({ type: "_NEXT "});
    }
    _prev() {
        // let currentStep = this.state.currentStep
        // currentStep = currentStep <= 1? 1: currentStep - 1
        // this.setState({
        //     currentStep: currentStep
        // })
        this.props.dispatch({ type: "_PREV "});
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
        const currentStepView = (props) => {
            if(props.currentStep == 1 ) {
                return <Step1
                currentStep={this.props.currentStep}
                handleCheckboxChange={this.handleCheckboxChange}
                checkedItems={this.state.checkedItems}
            />;
            }
            if(props.currentStep == 2 ) {
                return <Step2 
                currentStep={this.props.currentStep}
                handleChange={this.handleChange}
                handsOn={this.state.handsOn}
                cost={this.state.cost}
            />;
            }
            if(props.currentStep == 3 ) {
                return <Step3 
                currentStep={this.props.currentStep}
                handleChange={this.handleChange}
                addInfo={this.state.addInfo}
            />;
            }
        };
        return (
            <>
            <div className="container">
                <p>Step {this.props.currentStep}</p>

                <form onSubmit={this.handleSubmit}>
                    {currentStepView}
                </form>
                {this.previousButton}
                {this.nextButton}
            </div>
            </>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        currentStep: state.currentStep
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps)(MasterForm)