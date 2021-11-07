import React from "react";

const Form = (props) => {

    if(props.text!= "" && props != null) {
        fetch('/myAPI', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: props.text,
        })
    }
    return (
        <></>
  );
}

export default Form