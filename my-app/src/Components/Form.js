import React from "react";

const Form = (props) => {

    if(props) {
        const data = {name: props.text};
        console.log('submit');
        fetch('/myAPI', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({content: data}),
        })
    }


    return (
        <></>
  );
}

export default Form