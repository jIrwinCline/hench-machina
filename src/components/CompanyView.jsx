import React from 'react';


export default function CompanyView(props) {
    console.log(props)
    function armed() {
        if (props.company.armedServices){
            return "Provides Armed Guards: Yes"
        } else {
            return "Provides Armed Guards: No"
        }
    }
    function handsOn() {
        if (props.company.handsOn){
            return "Will Arrest on Behalf on Clients: Yes"
        } else {
            return "Will Arrest on Behalf on Clients: No"
        }
    }
    function discreet() {
        if (props.company.discreet){
            return "Provides undercover Security Officers: Yes"
        } else {
            return "Provides undercover Security Officers: No"
        }
    }
  return (
    <div>
        <h3>{props.company.coreServices}</h3><br/>
        <h3>{props.company.specialServices}</h3><br/>
        <h3>{discreet()}</h3><br/>
        <h3>{armed()}</h3><br/>
        <h3>{handsOn()}</h3><br/>
        <h3>{props.company.contactNumber}</h3><br/>
        <h3>{props.company.address}</h3><br/>
    </div>
  )
};