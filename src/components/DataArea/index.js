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
            .then(function (res) {
                return res.json();
            })
            .then((res) => {
                this.setState({
                    employees: res,
                    allEmployees: res,
                    isLoading: false,
                });
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return(

    )

}