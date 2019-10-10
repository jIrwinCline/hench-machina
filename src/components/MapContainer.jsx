import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

export class MapContainer extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        stores: [{lat: 47.49855629475769, lng: -122.14184416996333},
                {latitude: 47.359423, longitude: -122.021071},
                {latitude: 47.2052192687988, longitude: -121.988426208496},
                {latitude: 47.6307081, longitude: -122.1434325},
                {latitude: 47.3084488, longitude: -122.2140121},
                {latitude: 47.5524695, longitude: -122.0425407}]
      }
    }
  
    displayMarker = () => {
        if (this.props.coordinates){
            return <Marker position={{
                lat: this.props.coordinates[0],
                lng: this.props.coordinates[1]
            }} />
        }
    }
  
    render() {
        const mapStyles = {
            width: '100%',
            height: '100%',
          };
      return (
          <Map
            google={this.props.google}
            zoom={8}
            style={mapStyles}
            initialCenter={{ lat: 45.5051, lng: -122.6750}}
          >
            {this.displayMarker()}
          </Map>
      );
    }
  }

  export default GoogleApiWrapper({
    apiKey: ''
  })(MapContainer);

  
