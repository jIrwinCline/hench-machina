import React, { Component } from 'react';
import masterCompanyList from './companies';
import Company from './Company';

export default function ReturnedCompanies(props) {
    console.log(props)
    return (
    <div>
        {props.companies.map((company, index ) => 
            <Company company={company} index={index} />
        )}
    </div>
    );
};