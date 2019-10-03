import React, { Component } from 'react';
import masterCompanyList from './companies';


export default function Company(props) {

    console.log("COMPANY PROPS:", props)
    return (
    <div>
        <h1>Company</h1>
        <p>{props.company.companyName}</p>
        <p>{props.company.coreServices}</p>
    </div>
    )
};