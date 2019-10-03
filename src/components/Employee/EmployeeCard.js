import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Employee.css'

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img className={this.props.employee.id === 4 ? "spinner" : ""} src={require(`./Images/${this.props.employee.url}`)} alt="Good Boi with a job" />
          </picture>
          <h3>Name: <span className={this.props.employee.employeeOftheMonth === "true" ? "EmployeeOfTheMonth" : "card-Employeename"}>{this.props.employee.name}</span></h3>
          {
            this.props.employee.employeeOftheMonth === "true" ? <p>Employee Of the Month, Good job {this.props.employee.name}!</p> : ""
          }
          {/* <Link to={`/employee/${this.props.employee.id}`}><button>Details</button></Link> */}
          <button type="button"
        onClick={() => { this.props.history.push(`/employee/${this.props.employee.id}/details`) }}>Details</button>
          <button type="button" onClick={() => {this.props.history.push(`/employee/${this.props.employee.id}/edit`)}}>Edit</button>
        <button type="button" onClick={() => this.props.deleteEmployee(this.props.employee.id)}>You're Fired!</button>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;