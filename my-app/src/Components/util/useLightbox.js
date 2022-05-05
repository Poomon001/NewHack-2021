import { createContext, useState, useContext } from "react";

// create a context
const LightboxContext = createContext(null);

// provide context
export const LightboxProvider = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  const DisplayLightbox = (props) => {
    return isOpen && <div className="lightbox">{props.children}</div>;
  };

  const Button = () => {
    return (
      <button onClick={isOpen ? close : open} className="lightboxButton">
        {isOpen ? "Close The Result" : "Open The Result"}
      </button>
    );
  };

  return (
    <LightboxContext.Provider
      value={{ isOpen, open, close, DisplayLightbox, Button }}
    >
      {props.children}
    </LightboxContext.Provider>
  );
};

// consume context
export const useLightbox = () => {
  return useContext(LightboxContext);
};
