import React, { Component } from 'react';
import masterCompanyList from './companies';
import Company from './Company';

export default function ReturnedCompanies(props) {
    console.log(props.viewCompany)
    return (
    <div className="main-padding">
        {props.companies.map((company, index ) => 
            <Company selectedCompany={props.selectedCompany} viewCompany={props.viewCompany} company={company} index={index} key={index}/>
        )}
    </div>
    );
};