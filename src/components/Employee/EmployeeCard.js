import React, { Component } from 'react';

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require(`./Images/${this.props.employee.url}`)} alt="Good Boi with a job" />
          </picture>
          <h3>Name: <span className="card-Employeename">{this.props.employee.name}</span></h3>
          {
            this.props.employee.employeeOftheMonth === "true" ? <p>Employee Of the Month, Good job {this.props.employee.name}!</p> : ""
          }
          <button type="button" onClick={() => {this.props.history.push(`/employee/${this.props.employee.id}/edit`)}}>Edit</button>
        <button type="button" onClick={() => this.props.deleteEmployee(this.props.employee.id)}>You're Fired!</button>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;