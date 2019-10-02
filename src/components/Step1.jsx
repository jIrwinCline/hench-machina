import React, {Component} from 'react';
import checkboxes from './checkboxes';
import Checkbox from './Checkbox';

export default function Step1(props) {
    let inputs = checkboxes.map(item => {
        console.log(item)
        return(
        <div>

            <label htmlFor={item.name} key={item.key}>
            {item.name}
            </label>
            <Checkbox name={item.name} checked={props.checkedItems.get(item.name)} onChange={props.handleCheckboxChange} />
        </div>
        );
        })
    return(
        <>
        <h3>Select Services Needed</h3>
        <p>and we'll find companies that can provide</p>
       
        {inputs}
        
        </>
    )
};

/* <h3>Select Services Needed</h3>
<p>and we'll find companies that can provide</p>
<div className="boxes form-group">
    <input type="checkbox" id="box-1"/>
    <label htmlFor="box-1">Patrol</label>

    <input type="checkbox" id="box-2"/>
    <label htmlFor="box-2">Loss Prevention</label>

    <input type="checkbox" id="box-3"/>
    <label htmlFor="box-3">Entry Access</label>

    <input type="checkbox" id="box-4"/>
    <label htmlFor="box-4">Surveilance</label>

    <input type="checkbox" id="box-5"/>
    <label htmlFor="box-5">Executive/personnel protection</label>

    <input type="checkbox" id="box-6"/>
    <label htmlFor="box-6">Estate and Residential Protection</label>
</div> */