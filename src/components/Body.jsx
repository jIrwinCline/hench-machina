import React, { Component } from 'react';
import NewsFeed from './NewsFeed';
import Navigation from './Navigation';
import MasterForm from './MasterForm';
import masterCompanyList from './companies';
import ReturnedCompanies from './ReturnedCompanies';
import BackButton from './BackButton'


export default class Body extends Component {

  constructor(props) {
    super(props)
    this.state = {
      page: "main-page",
      selectedCompany: null,
      findButton: false,
      submitted: false,
      returnedCompanies: null,
      companies: masterCompanyList,
      currentStep: 1,
      checkedItems: new Map(),
      handsOn: false,
      cost: "med",
      addInfo: "",
      enterPage: "form-page",
      pageArray: ["form-page", "all-companies-page", "guard-page"],
      position: 0,
      pageHistory: ["main-page"],
      pageContent: "Services"
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
  if (this.state.pageContent == "Guards"){
    {window.location = "http://dpsstnet.state.or.us/IRIS_PublicInquiry/PrivateSecurity/smsgoperson.aspx";}
  } else {
  const newState = Object.assign({}, this.state, { findButton: true, page: this.state.enterPage })
  this.setState( newState )
  }
}
nextButtonClick = () => {
  console.log("DOES THE STATE CHANGE WORK?: ----------",this.state.pageArray[this.state.position + 1])
  let changeTo = null
  let newPosition = this.state.position + 1
  if (newPosition > 2){
    console.log("POSITION", newPosition)
    newPosition = 0;
  }
  switch(this.state.pageContent){
    case "Services":
    changeTo = "Companies"
    break;
    case "Companies":
    changeTo = "Guards"
    break;
    case "Guards":
    changeTo = "Services"
    break;
    default:
    console.log("error in Body line 87")
  }
  console.log(this.state.pageArray[newPosition])
  const newState = Object.assign({}, this.state, { pageContent: changeTo, position: newPosition, enterPage: this.state.pageArray[newPosition] })
  console.log("THE PAGE STATE: -----",this.state)
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

backButtonClick = () => {
  console.log("BACK BUTTON CICK: ",this.state.pageHistory[0])
  const newState = Object.assign({}, this.state, { page: this.state.pageHistory[0], returnedCompanies: null, checkedItems: new Map() })

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

    const newState = Object.assign({}, this.state, { submitted: true, page: "submitted-page" })
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
    // if (this.state.findButton == false ) {
    //   return (
    //     <>
    //     <NewsFeed />
    //     <Navigation findButtonClick={this.findButtonClick}/>
    //     </>
    //   )
    // } else {
    //   if (this.state.submitted == false ){
    //     return (
    //       <>
    //         {/* <NewsFeed /> */}
    //         <MasterForm
    //         handleSubmit={this.handleSubmit}
    //         handleCheckboxChange={this.handleCheckboxChange}
    //         handleChange={this.handleChange}
    //         checkedItems={this.state.checkedItems}
    //         addInfo={this.state.addInfo}
    //         />
    //         <Navigation />
    //       </>
    //     )
    //   } else {
    //     return (
    //       <>
    //         <ReturnedCompanies 
    //           selectedCompany={this.state.selectedCompany}
    //           companies={companies}
    //           viewCompany={this.viewCompany}
    //         />
    //         <Navigation />
    //       </>
    //     )
    //   }
    // }
    //////////////////////////////////////////////////////////////
    switch (this.state.page){
      case "main-page":
      return (
        <>
        <NewsFeed />
        <Navigation pageContent={this.state.pageContent} findButtonClick={this.findButtonClick} nextButtonClick={this.nextButtonClick}/>
        </>
      )
      case "form-page":
      return (
        <>
          <BackButton backButtonClick={this.backButtonClick}/>
          <MasterForm
          handleSubmit={this.handleSubmit}
          handleCheckboxChange={this.handleCheckboxChange}
          handleChange={this.handleChange}
          checkedItems={this.state.checkedItems}
          addInfo={this.state.addInfo}
          />
        </>
      )
      case "submitted-page":
      return (
      <>
        <BackButton backButtonClick={this.backButtonClick}/>
        <ReturnedCompanies 
          selectedCompany={this.state.selectedCompany}
          companies={companies}
          viewCompany={this.viewCompany}
        />
      </>
      )
      case "all-companies-page":
      return (
        <>
          <BackButton backButtonClick={this.backButtonClick}/>
          <ReturnedCompanies 
          selectedCompany={this.state.selectedCompany}
          companies={masterCompanyList}
          viewCompany={this.viewCompany}
        />
        </>
      )
      case "guard-page":
      return (
        <>
          <BackButton backButtonClick={this.backButtonClick}/>
        </>
      )
    }
  }
};