import React, { Component } from 'react';
import EmployeeManager from '../../modules/EmployeeManager';
// import './EmployeeDetail.css'
import { Route, withRouter, Redirect } from "react-router-dom"

class EmployeeDetail extends Component {

  state = {
      employeeName: "",
      employeeOftheMonth: "",
      url: "",
      isEmployeeValid: false,
      loadingStatus: true,

  }

  componentDidMount(){
    console.log("EmployeeDetail: ComponentDidMount");
    //get(id) from AnimalManager and hang on to the data; put it into state
    EmployeeManager.get(this.props.employeeId)
    .then((employee) => {
      //if the name of the animal exist, set isAnimalValid to true//
      if (employee.name) {
        var isEmployeeValid = true;
      }
      this.setState({
        name: employee.name,
        employeeOftheMonth: employee.employeeOftheMonth,
        url: employee.url,
        loadingStatus: false,
        isEmployeeValid: isEmployeeValid
      });
    });
  }

  handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    this.setState({loadingStatus: true})
    EmployeeManager.delete(this.props.employeeId)
    .then(() => this.props.history.push("/employee"))
}

  render() {
    /*this statement is added to the render to prevent
    the method from exploding when it doesn't have the animal url yet, the state starts with "" */
    if (this.state.loadingStatus) {
      return <p>Loading...</p>
      //line below checks if loadingStatus is finished and if the isAnimalValid has been set to true//
    } if (!this.state.loadingStatus && this.state.isEmployeeValid) {
        return (
            <div className="card">
              <div className="card-content">
                <picture>
                  <img className={this.state.id === 4 ? "spinner" : ""} src={require(`./Images/${this.state.url}`)} alt="Good Boi with a job" />
                </picture>
                <h3>Name: <span className={this.state.employeeOftheMonth === "true" ? "EmployeeOfTheMonth" : "card-Employeename"}>{this.state.name}</span></h3>
                {
                  this.state.employeeOftheMonth === "true" ? <p>Employee Of the Month, Good job {this.state.name}!</p> : ""
                }
                <button type="button" onClick={() => {this.state.history.push(`/employee/${this.state.id}/edit`)}}>Edit</button>
              <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>You're Fired!</button>
              </div>
            </div>
          );
  } else {
    //redirects back to the animals page if no Id//
    return <Redirect to="/employee"/>
  }
  }}

export default EmployeeDetail;