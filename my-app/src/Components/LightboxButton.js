import { LightboxContext } from "../App";
import React, { useContext } from "react";
const LightBoxButton = () => {
  const { openLightbox, setOpenLightbox } = useContext(LightboxContext);

  const onClickHandle = () => {
    setOpenLightbox(!openLightbox);
  };
  return (
    <button onClick={onClickHandle} className="lightboxButton">
      Open The Result
    </button>
  );
};

export default LightBoxButton;
