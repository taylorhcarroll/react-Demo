import React, { Component } from 'react';

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./location.jpg')} alt="location" />
          </picture>
          <h3>Location: <span className="card-locationName">{this.props.location.name}</span></h3>
          <p>Here you can see our fuzzy facility!</p>
          <p>Address: {this.props.location.location}</p>
          <p>Capacity:{this.props.location.capacity}</p>
          <button type="button" onClick={() => this.props.deleteLocation(this.props.location.id)}>SHUT IT DOWN!</button>
        </div>
      </div>
    );
  }
}

export default LocationCard;