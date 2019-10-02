import React, { Component } from "react"
import EmployeeManager from "../../modules/EmployeeManager"
// import "./employeeForm.css"

class EmployeeEditForm extends Component {
    //set the initial state
    state = {
      employeeName: "",
      employeeOftheMonth: "",
      url: "",
      loadingStatus: true,
    };

    handleFieldChange = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    }

    updateExistingEmployee = evt => {
      evt.preventDefault()
      this.setState({ loadingStatus: true });
      const editedEmployee = {
        id: this.props.match.params.employeeId,
        name: this.state.employeeName,
        employeeOftheMonth: this.state.employeeOftheMonth,
        url: this.state.url
      };

      EmployeeManager.update(editedEmployee)
      .then(() => this.props.history.push("/employee"))
    }

    componentDidMount() {
      EmployeeManager.get(this.props.match.params.employeeId)
      .then(employee => {
          this.setState({
            employeeName: employee.name,
            employeeOftheMonth: employee.employeeOftheMonth,
            url: employee.url,
            loadingStatus: false,
          });
      });
    }

    render() {
      return (
        <>
        <form>
          <fieldset>
            <div className="formgrid">
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="employeeName"
                value={this.state.employeeName}
              />
              <label htmlFor="employeeName">Employee name</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="employeeOftheMonth"
                value={this.state.employeeOftheMonth}
              />
              <label htmlFor="employeeOftheMonth">Employe of the Month: </label>
              {/* starts the input for URL */}
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="url"
                value={this.state.url}
              />
              <label htmlFor="url">Employee Url</label>
              {/* ends the input for URL */}
            </div>
            <div className="alignRight">
              <button
                type="button" disabled={this.state.loadingStatus}
                onClick={this.updateExistingEmployee}
                className="btn btn-primary"
              >Submit</button>
            </div>
          </fieldset>
        </form>
        </>
      );
    }
}

export default EmployeeEditForm