import React from "react";

const Form = (props) => {

    if(props) {
      console.log(props.text)
      const data = {name: props.text};
      console.log('/myAPI', {
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