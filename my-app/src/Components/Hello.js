import React from "react";

const Hello = (props) => {
    const [a,b,c] = props.todo;
    return(
        <>
            <h1>{b}</h1>
        </>
    )
}

export default Hello