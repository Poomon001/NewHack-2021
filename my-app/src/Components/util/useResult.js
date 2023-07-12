import { useContext, createContext, useState } from "react";

// create a context
const ResultContext = createContext(null);

// provide a context
export const ResultProvider = (props) => {
  const [result, setResult] = useState({});

  return (
    <ResultContext.Provider value={{ result, setResult }}>
      {props.children}
    </ResultContext.Provider>
  );
};

// consume context
export const useResult = () => {
  return useContext(ResultContext);
};
