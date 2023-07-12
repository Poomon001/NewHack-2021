import { useContext, createContext, useState } from "react";

// create a context
const AlertContext = createContext(null);

// provide a context
export const AlertProvider = (props) => {
  const [alert, setAlert] = useState(false);

  return (
    <AlertContext.Provider value={{ alert, setAlert }}>
      {props.children}
    </AlertContext.Provider>
  );
};

// consume context
export const useAlert = () => {
  return useContext(AlertContext);
};
