
import React from "react";
import Welcome from "./Welcome";


const Hello = (props) => {

    return (
        <div>
            <h1> Hello {props.name} </h1>
            <Welcome/>
        </div>
    );
}
export default Hello;