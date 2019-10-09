import React from 'react';
import MapContainer from "./MapContainer"


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
    <>
        <hr style={{backgroundColor: "grey"}}/>
        <h4>Services</h4>
        <ul>
        {
            props.company.coreServices.map((service, index) => (
                <li>{service}</li>
            ))}
        </ul><br/>
        <h4>Special Services</h4>
        <ul>
        {
            props.company.specialServices.map((service, index) => (
                <li>{service}</li>
            ))}
        </ul><br/>
        <p>{discreet()}</p><br/>
        <p>{armed()}</p><br/>
        <p>{handsOn()}</p><br/>
        <div className="contact-info">
            <a href={props.company.url}><button className="button button--aylen button--border-thick button--inverted button--text-upper button--size-s" >Website Portal</button></a>
            <br/>
            <h4>{props.company.contactNumber}</h4><br/>
            <h4>{props.company.address}</h4><br/>
            <div className="map-container-style">
                <MapContainer coordinates={props.company.coordinates}/>
            </div>
        </div>
    </>
  )
};