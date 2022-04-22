const Request = (text) => {
  // send a request to Flask RestAPIs if data is passed
  const postApi = async (text) => {
    console.log("submit");
    let response = await fetch("/postAPI", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: text,
    });
    response = await response.json();
    return response;
  };

  if (text) {
    return postApi(text);
  }
};

export default Request;
