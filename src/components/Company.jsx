import React, { Component } from 'react';
import masterCompanyList from './companies';
import CompanyView from './CompanyView'

export default function Company(props) {
function expandCompany() {
    console.log("LOOK HEREEEEEEEEEEEE: ",props.selectedCompany)
    if (props.selectedCompany == props.company.companyName){
        return <CompanyView company={props.company}/>;
    } else {
        return null;
    }
}

    console.log("COMPANY PROPS:", props)
    //below, onclick has to be anon 
    return (
    <div>
        <h1>Company</h1>
        <p onClick={() => props.viewCompany(props.company.companyName)} >{props.company.companyName}</p> 
        {expandCompany()}
        {/* <p>{props.company.coreServices}</p> */}
    </div>
    )
};