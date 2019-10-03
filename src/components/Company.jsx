import React, { Component } from 'react';
import masterCompanyList from './companies';


export default function Company(props) {

    console.log(properCompaniesVar)
    return (
    <div>
        <h1>Company</h1>
        <p>{props.company.name}</p>
        <p>{props.company.coreServices}</p>
    </div>
    )
};