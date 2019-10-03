import React, { Component } from 'react';
import NewsFeed from './NewsFeed';
import Navigation from './Navigation';
import MasterForm from './MasterForm';
import masterCompanyList from './companies';
import ReturnedCompanies from './ReturnedCompanies';



export default class Body extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedCompany: null,
      findButton: false,
      submitted: false,
      returnedCompanyies: null,
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

viewCompany = (companyName) => {
  console.log("TARGET: ", companyName)
  
  const newState = Object.assign({}, this.state, { selectedCompany: companyName })
  this.setState( newState )
  console.log("RECENT STATE: ",this.state)
}
findButtonClick = () => {

  const newState = Object.assign({}, this.state, { findButton: true })
  this.setState( newState )
}
handleChange = (event)=> {
    const {name, value} = event.target
    this.setState({
        [name]: value
    })
    console.log("after handle change", this.state)
}

handleCheckboxChange = (e) => {
    console.log("HandleCheckboxChange", this.state)
    const item = e.target.name;
    const isChecked = e.target.checked;
    // this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));

    const newState = Object.assign({}, this.state, { checkedItems: this.state.checkedItems.set(item, isChecked) })

    this.setState( newState )
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

    const newState = Object.assign({}, this.state, { submitted: true })
    this.setState(newState)

    // Object.keys(checkedItems).forEach(function(key) {
    //     console.log(key)
    //     serviceArr.push(checkedItems[key])
    // });
    // let printedServices = printServices(checkedItems)

    //ALERT FORM INPUTS
    // alert(`Your search details: \n
    // Services: ${serviceArr} \n
    // Arresting: ${handsOn} \n
    // Price: ${cost} \n
    // Additional Info: ${additionalInfo}
    // `) 
}
properCompanies = () => {
  console.log(this)
  let result = []
  let checked = this.state.checkedItems.keys()
  for (let i = 0; i < masterCompanyList.length; i++ ) {
      for (let c of this.state.checkedItems.keys()){
          if (masterCompanyList[i].coreServices.includes(c)){
              // result.push(<Company company={masterCompanyList[i]}/>);
              result.push(masterCompanyList[i]);
          }
      };
  }
  console.log("CONSOLED RESULT:", [...new Set(result)])
  // this.setState({returnedCompanies: [...new Set(result)]})
  return [...new Set(result)]
}
  render(){
    let companies = this.properCompanies()
    if (this.state.findButton == false ) {
      return (
        <>
        <NewsFeed />
        <Navigation findButtonClick={this.findButtonClick}/>
        </>
      )
    } else {
      if (this.state.submitted == false ){
        return (
          <>
            {/* <NewsFeed /> */}
            <MasterForm
            handleSubmit={this.handleSubmit}
            handleCheckboxChange={this.handleCheckboxChange}
            handleChange={this.handleChange}
            checkedItems={this.state.checkedItems}
            addInfo={this.state.addInfo}
            />
            <Navigation />
          </>
        )
      } else {
        return (
          <>
            <ReturnedCompanies 
              companies={companies}
              viewCompany={this.viewCompany}
            />
            <Navigation />
          </>
        )
      }
    }
    // return (
    //     <div>
    //     {/* <NewsFeed /> */}
    //     <MasterForm
    //       handleSubmit={this.handleSubmit}
    //       handleCheckboxChange={this.handleCheckboxChange}
    //       handleChange={this.handleChange}
    //       checkedItems={this.state.checkedItems}
    //       addInfo={this.state.addInfo}
    //     />
    //     <ReturnedCompanies companies={companies} />
    //     <Navigation />
    //     </div>
    // )
  }
};