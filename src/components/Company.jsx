import React, { Component } from 'react';
import masterCompanyList from './companies';
import CompanyView from './CompanyView'

export default function Company(props) {

    console.log("COMPANY PROPS:", props)
    //below, onclick has to be anon 
    return (
    <div>
        <h1>Company</h1>
        <p onClick={() => props.viewCompany(props.company.companyName)} >{props.company.companyName}</p> 
        <CompanyView company={props.company}/>
        {/* <p>{props.company.coreServices}</p> */}
    </div>
    )
};