import { LightboxContext, ResultContext } from "../App";
import React, { useContext } from "react";
import Display from "./Display";
import LightBoxButton from "./LightboxButton";

const Lightbox = (props) => {
  const { openLightbox } = useContext(LightboxContext);
  const { result } = useContext(ResultContext);
  return (
    <>
      {openLightbox && (
        <div className="lightbox">
          <LightBoxButton />
          <Display todo={result} />
        </div>
      )}
      <>{props.children}</>
    </>
  );
};

export default Lightbox;
