import React, { Component } from "react";

export default class DataArea extends Component {
    state = {
        employees: [],
        allEmployees: [],
        isLoading: true,
    };

    headings = ["name..."];


    componentDidMount() {
        fetch("/employees.json")
            .then(function (response) {
                return response.json();
            })
            .then((response) => {
                this.setState({
                    employees: response,
                    allEmployees: response,
                    isLoading: false,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    sortDob = (event) => {
        const dob = event.target.value;
        if (dob === "old") {
            this.setState({
                employees: this.state.employees.sort(function (x, y) {
                    var date1 = new Date(x.dob).getTime();
                    var date2 = new Date(y.dob).getTime();
                    return date1 > date2 ? 1 : -1;
                }),
            });
        } else if (dob === "young") {
            this.setState({
                employees: this.state.employees.sort(function (x, y) {
                    var date1 = new Date(x.dob).getTime();
                    var date2 = new Date(y.dob).getTime();
                    return date1 < date2 ? 1 : -1;
                }),
            });
        }
    };

    render() {
        return (
            <div>
                <div>
                    <label htmlFor="dob">Sort by birthday:</label>
                    <select onChange={this.sortDob}>
                        <option value="current">Current</option>
                        <option value="old">Old to Young</option>
                        <option value="young">Young to Old</option>
                    </select>
                </div>
                <table className="table table-striped">
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Date of Birth</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                    <tbody>
                        {this.state.employees.map(function (props) {
                            console.log(props.name)
                            return (
                                <tr key={props.id}>
                                    <td>
                                        <img alt="pic" src={props.pic}></img>
                                    </td>
                                    <td>{props.name}</td>
                                    <td>{props.dob}</td>
                                    <td>{props.email}</td>
                                    <td>{props.phone}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}










