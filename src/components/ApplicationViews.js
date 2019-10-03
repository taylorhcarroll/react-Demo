// import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import OwnerList from './Owner/OwnerList'
import AnimalList from './animal/AnimalList'
import AnimalForm from './animal/AnimalForm'
import AnimalEditForm from './animal/AnimalEditForm'
import EmployeeList from './Employee/EmployeeList'
import EmployeeDetail from './Employee/EmployeeDetail'
import EmployeeForm from './Employee/EmployeeForm'
import EmployeeEditForm from './Employee/EmployeeEditForm'
import AnimalDetail from './animal/AnimalDetail'
import LocationList from './Location/LocationList'
import Login from './auth/Login'
import { Route, withRouter, Redirect } from "react-router-dom"
import EmployeeWithAnimals from './Employee/EmployeeWithAnimals'

//ApplicationViews merely listens for the route, the buttons are what tell the browser where the user wants to go//
class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        {/* added "exact" to the path because we now have Animal Details */}
        <Route exact path="/animals" render={props => {
          if (this.props.user) {
            return <AnimalList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route exact path="/animals/:animalId(\d+)" render={(props) => {
          if (this.props.user) {
            // Pass the animalId to the AnimalDetailComponent//
            return <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/animals/new" render={(props) => {
          if (this.props.user) {
            return <AnimalForm {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/animals/:animalId(\d+)/edit" render={props => {
          if (this.props.user) {
            return <AnimalEditForm {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route exact path="/employee" render={(props) => {
          if (this.props.user) {
            return <EmployeeList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route exact path="/employee/:employeeId(\d+)/details" render={(props) => {
          if (this.props.user) {
            // Pass the animalId to the EmployeeDetailComponent//
            return <EmployeeWithAnimals employeeId={parseInt(props.match.params.employeeId)} {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
         <Route path="/employee/new" render={(props) => {
          if (this.props.user) {
            return <EmployeeForm {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route exact path="/employee/:employeeId(\d+)/edit" render={props => {
          if (this.props.user) {
            return <EmployeeEditForm {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/Owner" render={(props) => {
            return <OwnerList />
        }} />
        <Route exact path="/Location" render={(props) => {
          return <LocationList />
        }} />
        <Route
          path="/login"
          render={props => {
            return <Login setUser={this.props.setUser} {...props} />
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews