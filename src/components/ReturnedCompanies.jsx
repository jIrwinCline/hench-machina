import React, { Component } from 'react';
import masterCompanyList from './companies';


export default class ReturnedCompanies extends Component {
    constructor(props){
        super(props)
    }

    properCompanies = () => {
        console.log(this)
        let result = []
        let checked = this.props.checkedItems.keys()
        for (let i = 0; i < masterCompanyList.length; i++ ) {
            console.log("KEYS:",checked)
            console.log("Object.keys(checked): ", Object.keys(checked))
            for (let c of this.props.checkedItems.keys()){
                console.log("checked items: ", c )
                console.log(masterCompanyList[i].coreServices)
                if (masterCompanyList[i].coreServices.includes(c)){
                    console.log(true)
                    result.push(masterCompanyList[i].companyName);
                }
            };
        }
        console.log(result)
        return result
    }

    render() {
        let properCompaniesVar = this.properCompanies()
        // let companyProperties = properCompaniesVar[0]
        // console.log(companyProperties)
        // console.log(Object.keys(companyProperties))
        console.log(properCompaniesVar[0])
        return (
        <div>
            <h1>{this.properCompanies()}</h1>
        </div>
        )
    };
}