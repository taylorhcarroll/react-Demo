import React, { Component } from 'react';

class OwnerCard extends Component {
  render() {
      console.log(this.props)
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require(`${this.props.owner.url}`)} alt="bestBoi" />
          </picture>
          <h3>Name: <span className="card-Owner">{this.props.owner.name}</span></h3>
          <p>Breed: Owner and CEO of Student Kennels</p>
          <p>Motto: "{this.props.owner.motto}"</p>
          <button type="button" onClick={() => this.props.deleteOwner(this.props.owner.id)}>Resign</button>
        </div>
      </div>
    );
  }
}

export default OwnerCard;