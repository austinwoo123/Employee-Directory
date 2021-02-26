import React from "react";
import "./style.css";
import DataArea from "../DataArea"
import Search from "../Search/index"




// function handleOnChange(arr, query) {
//     return arr.filter(function (name) {
//         return name.toLowerCase().indexOf(query.toLowerCase()) !== -1
//     })
// }



function Main() {

    const handleOnChange = (event) => {
        const employee = event.target.value;


    }


    return (
        <div className="main">

            <Search onChange={handleOnChange} placeholder='Enter a name' />
            <DataArea />

        </div>
    );
}

export default Main;
