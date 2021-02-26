import React from "react";
import "./style.css";
import DataArea from "../DataArea"
import Search from "../Search/index"

function Main() {
    return (
        <div className="main">
            <Search onChange={handleOnChange} placeholder='this is a placeholder' />
            <DataArea />

        </div>
    );
}

export default Main;
