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
    }
  }
  render(){
    return (
        <div>
        <NewsFeed />
        <MasterForm />
        <Navigation />
        </div>
    )
  }
};