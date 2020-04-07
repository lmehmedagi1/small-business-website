import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    width: '95%',
    height: '40%'
};

export class MyMap extends React.Component {
    render() {
        return (
            <Map google={this.props.google} zoom={14} style = {mapStyles}>
                <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />
                <InfoWindow onClose={this.onInfoWindowClose}>
                 
                </InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAQNbDcE3lCf3CJK-gky691HVOBiL4n9ww'
})(MyMap);