import React, { Component } from 'react';
import NewsFeed from './NewsFeed';
import Navigation from './Navigation';
import MasterForm from './MasterForm';
import masterCompanyList from './companies';



export default class Body extends Component {

  constructor(props) {
    super(props)
    this.state = {
        companies: masterCompanyList,
        currentStep: 1,
        checkedItems: new Map(),
        handsOn: false,
        cost: "med",
        addInfo: "",
    }
}
// _next() {
//     let currentStep = this.state.currentStep

//     currentStep = currentStep >= 2? 3: currentStep + 1
//     this.setState({
//         currentStep: currentStep
//     })
// }
// _prev() {
//     let currentStep = this.state.currentStep
//     currentStep = currentStep <= 1? 1: currentStep - 1
//     this.setState({
//         currentStep: currentStep
//     })
// }
// get nextButton(){
//     let currentStep = this.state.currentStep;
//     if(currentStep <3){
//         return (
//         <button 
//             className="btn btn-primary float-right" 
//             type="button" onClick={this._next}>
//         Next
//         </button>        
//         )
//     }
//     return null;
// }
// get previousButton(){
//     let currentStep = this.state.currentStep;
//     if(currentStep !== 1 ){
//         return (
//             <button
//                 className="btn btn-secondary"
//                 type="button" onClick={this._prev}>
//             Previous
//             </button>
//         )
//     }
//     return null;
// }
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
    return (
        <div>
        <NewsFeed />
        <MasterForm
          handleSubmit={this.handleSubmit}
          handleCheckboxChange={this.handleCheckboxChange}
          handleChange={this.handleChange}
          checkedItems={this.state.checkedItems}
        />
        {/* <ReturnedCompanies /> */}
        <Navigation />
        </div>
    )
  }
};