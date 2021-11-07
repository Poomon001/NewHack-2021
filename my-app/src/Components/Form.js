import React, {useState} from "react";

const Form = (props) => {
    const [text, setText] = useState("")
    console.log(props.data)
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { name: this.props.data};
        console.log('submit');
        fetch('/myAPI', {
          method: 'POST',
          headers: {
            'Content-Type' : 'application/json'
          },
          body: JSON.stringify({content: data}),
        })
    }

    const handleChange = (e) => {
        setText(e.target.value)
    }
    return (
        <section id="app">
          <form action="" onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={handleChange} />
            <button> submit </button>
          </form>
        </section>
  );
}

export default Form