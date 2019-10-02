import React, { Component } from 'react';
import EmployeeManager from '../../modules/EmployeeManager';

class EmployeeForm extends Component {
    state = {
        employeeName: "",
        employeeOftheMonth: "",
        url: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create animal      object, invoke the AnimalManager post method, and redirect to the full animal list
    */
    constructNewEmployee = evt => {
        evt.preventDefault();
        if (this.state.employeeName === "" || this.state.employeeOftheMonth === "" || this.state.url === "") {
            window.alert("Please fill out all fields before submitting.");
        } else {
            this.setState({ loadingStatus: true });
            const employee = {
                name: this.state.employeeName,
                employeeOftheMonth: this.state.employeeOftheMonth,
                url: this.state.url,
            };

            // Create the animal and redirect user to animal list
            EmployeeManager.post(employee)
            .then(() => this.props.history.push("/employee"));
        }
    };

    render(){

        return(
            <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="employeeName"
                        placeholder="Employee name"
                        />
                        <label htmlFor="employeeName">Name</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="employeeOftheMonth"
                        placeholder="true or false"
                        />
                        <label htmlFor="employeeOftheMonth">Employee of the Month</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="url"
                        placeholder="Employee Url"
                        />
                        <label htmlFor="employeeUrl">Url</label>
                    </div>
                    <div className="alignRight">
                        <button
                        type="button"
                        disabled={this.state.loadingStatus}
                        onClick={this.constructNewEmployee}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
        )
    }
}

export default EmployeeForm