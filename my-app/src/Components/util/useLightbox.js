import { createContext, useState, useContext, useEffect } from "react";

// create a context
const LightboxContext = createContext(null);

// provide context
export const LightboxProvider = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldDisplay, setShouldDisplay] = useState(false);

  const open = () => {
    var x = document.getElementById("body");
    x.style.display = "none";
    setIsOpen(true);
  };

  const close = () => {
    var x = document.getElementById("body");
    x.style.display = "block";
    setIsOpen(false);
  };

  const DisplayLightbox = (props) => {
    return isOpen && <div className="lightbox">{props.children}</div>;
  };

  const Button = () => {
    return (
      <button
        onClick={isOpen ? close : open}
        id="lightboxButton"
        className="lightboxButton"
        style={{}}
      >
        {isOpen ? "Close The Result" : "Open The Result"}
      </button>
    );
  };

  return (
    <LightboxContext.Provider
      value={{
        isOpen,
        open,
        close,
        DisplayLightbox,
        Button,
        shouldDisplay,
        setShouldDisplay,
      }}
    >
      {props.children}
    </LightboxContext.Provider>
  );
};

// consume context
export const useLightbox = () => {
  return useContext(LightboxContext);
};
