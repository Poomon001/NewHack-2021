import React from "react";
import { useLightbox } from "./util/useLightbox";

const Lightbox = (props) => {
  const lightbox = useLightbox();
  const DisplayLightbox = lightbox.DisplayLightbox;
  const Button = lightbox.Button;
  return (
    <>
      <DisplayLightbox>
        <Button />
        {props.children}
      </DisplayLightbox>
    </>
  );
};

export default Lightbox;
