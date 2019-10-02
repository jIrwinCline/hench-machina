import React, { Component } from 'react';
import NewsFeed from './NewsFeed';
import Navigation from './Navigation';
import MasterForm from './MasterForm';
import masterCompanyList from './companies';



export default class Body extends Component {
  constructor(props){
    super(props)
    this.state = {
      companies: masterCompanyList,
      // currentStep: 1,
      // checkedItems: new Map(),
      // handsOn: false,
      // cost: "med",
      // addInfo: "",
    }
    // this.handleChange = this.handleChange.bind(this)
    // this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    // this._next = this._next.bind(this)
    // this._prev = this._prev.bind(this)
  }
  render(){
    return (
        <div>
        <NewsFeed />
        <MasterForm/>
        {/* <ReturnedCompanies /> */}
        <Navigation />
        </div>
    )
  }
};