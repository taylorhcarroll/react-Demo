// import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import OwnerList from './Owner/OwnerList'
import AnimalList from './animal/AnimalList'
import AnimalForm from './animal/AnimalForm'
import EmployeeList from './Employee/EmployeeList'
import AnimalDetail from './animal/AnimalDetail'
import LocationList from './Location/LocationList'
import Login from './auth/Login'
import { Route, withRouter, Redirect } from "react-router-dom"


class ApplicationViews extends Component {

  isAuthenticated = () => localStorage.getItem("credentials") !== null

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        {/* added "exact" to the path because we now have Animal Details */}
        <Route exact path="/animals" render={props => {
          if (this.isAuthenticated()) {
              return <AnimalList {...props} />
          } else {
              return <Redirect to="/login" />
          }
        }} />
        <Route path="/animals/:animalId(\d+)" render={(props) => {
        // Pass the animalId to the AnimalDetailComponent//
          return <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props}/>
        }} />
        <Route path="/animals/new" render={(props) => {
          return <AnimalForm {...props} />
        }} />
        <Route path="/employee" render={(props) => {
          return <EmployeeList />
        }} />
        <Route path="/Owner" render={(props) => {
          return <OwnerList />
        }} />
        <Route exact path="/Location" render={(props) => {
          return <LocationList />
        }} />
        <Route path="/login" component={Login} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews