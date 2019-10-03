import React, { Component } from 'react';
import masterCompanyList from './companies';


export default class ReturnedCompanies extends Component {
    constructor(props){
        super(props)
    }

    properCompanies = function(){
        for (let i = 0; i < masterCompanyList.length; i++ ) {
            console.log(i)
        }
    }

    render() {
        // console.log(this.props.checkedItems)
        return (
        <div>
            <h1>{this.properCompanies()}</h1>
        </div>
        )
    };
}