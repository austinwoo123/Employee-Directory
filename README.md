# Employee-Directory
## Table of Contents
1. [Description](#description)
2. [Deployed Link](#deployed-link)
3. [How to Start](#how-to-start)
4. [Code Snippet](#code-snippet)
5. [Built with](#built-with)
6. [Licenses](#licenses)
7. [Author](#author)
8. [Acknowledgements](#acknowledgements)

-----------------------
## Description
This project involved creating an employee directory app using React. This project required the organization of components and managing compnent states, while responding to user events. 
-----------------------
## Deployed Link
[Link to Deployed Site]()

## How to Start
1. Copy the repo from GitLab using your ssh key
2. Run Git bash
3. Type in "code ." to open Visual Studios Code
4. Open the index.html, script.js, and style.css file

## Code Snippets
```
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

```
This code shows how the componentDidMount function is receiving data that is stored in the employees.json file. 

## Built With
- Express
- Javascript
- HTML/CSS
- React
- Axios


-----------------------
## Licenses
MIT

-----------------------
## Authors
- Austin Woo


-----------------------
## Acknowledgments
- Jerome Chenette (Instructor)
- Manuel Nunes (TA)
- Mahisha Manikandan (TA)
- UC Berkeley Coding Bootcamp
