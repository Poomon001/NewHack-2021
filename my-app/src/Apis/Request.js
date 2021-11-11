const Request = (text) => {
  // send a request to Flask RestAPIs if data is passed
  const postApi = async (text) => {
    let response = await fetch("/postAPI", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: text,
    });
    response = await response.json();

    console.log(response);
  };

  if (text) {
    postApi(text);
  }
};

export default Request;
