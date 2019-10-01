import React, { Component } from 'react';
import NewsFeed from './NewsFeed';
import Navigation from './Navigation';
import MasterForm from './MasterForm';

let masterCompanyList = [
  {
    companyName: "Corporate Crime Control Association",
    coreServices: [
      "Patrol",
      "Loss Prevention",
      "Entry Access",
      "Surveilance",
      "Event Security",
      "Executive/ Personnel Protection",
      "Estate and Residential Protection",
    ],
    specialServices: [
      "Transient Disbursement Services",
      "Street Crime Unit",
      "Security Consulting",
      "Drone Services (Day and Night FLIR)",
      "Executive Protection",
      "Workplace Violence Details",
      "Mobile Incident Command Center",
      "Security Training",
    ],
    discreet: true,
    armedServices: true,
    handsOn: true,
    hourlyRange: [23, 30],
    contactNumber: 9999999999,
    address: "21328 Highway 99E Aurora, OR 97002"

  },
  {
    companyName: "Northwest Enforcement",
    coreServices: [
      "Patrol",
      "Loss Prevention",
      "Entry Access",
      "Surveilance",
      "Event Security",
      "Executive/Personnel Protection",
      "Estate and Residential Protection",
      "Secure Transport",
    ],
    specialServices: [
      "Street Crime Unit",
      "Security Training",
    ],
    discreet: true,
    armedServices: true,
    handsOn: true,
    hourlyRange: [23, 30],
    contactNumber: 9999999999,
    address: "21328 Highway 99E Aurora, OR 97002"

  }
]

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