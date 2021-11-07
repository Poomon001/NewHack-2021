import React from "react"
import {Doughnut} from "react-chartjs-2";
import Factors from "./Factors";
import Total from "./Total";

const Display = (props) => {
    const graphStyle1 = {
        height: "20em",
        width: "22em",
        float: "left",
    }

    const graphStyle2 = {
        height: "20em",
        width: "20em",
        marginLeft: "30%",
        float: "right",
    }

    const wrapper = {
        width: "80%",
        height: "200px",
        margin: "auto",
        padding: "0px", //need to be changed from 10px so it looks combined
    }

    return (
    <div style={wrapper}>
        <div style={graphStyle1} id="left"><Factors todo={props.todo} /></div>
        <div style={graphStyle2} id="right"><Total todo={props.todo} /></div>
    </div>)
}

export default Display