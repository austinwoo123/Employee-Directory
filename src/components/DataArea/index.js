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

    render() {
        return (
            <div>
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










