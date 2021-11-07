import React from "react";

const Form = (props) => {
    //console.log(props)
    if(props.text !== '' && props.text !== undefined && props.text !== null) {
        console.log(props)
        fetch('/myAPI', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: props.text,
        })
        document.getElementById("left").style.display = "inline";
        document.getElementById("right").style.display = "inline";
    }
    return (
        <></>
  );
}

export default Form