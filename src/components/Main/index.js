
import "./style.css";
import DataArea from "../DataArea"
import Search from "../Search/index"
import React, { useState } from 'react';



// function handleOnChange(arr, query) {
//     return arr.filter(function (name) {
//         return name.toLowerCase().indexOf(query.toLowerCase()) !== -1
//     })
// }



function Main() {


    // Declare a new state variable, which we'll call "count"
    const handleOnChange = () => {

        //     const [count, setCount] = useState("");

    }


    return (
        <div className="main">

            <Search onChange={handleOnChange} placeholder='Enter a name' />
            <DataArea />

        </div>
    );
}

export default Main;
