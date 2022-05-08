import DragAndDrop from "./DragAndDrop";
import Loader from "./Loader";
import { useLightbox } from "./util/useLightbox";
import { usePromiseTracker } from "react-promise-tracker";
import React from "react";
import { useWindowSize } from "./util/useWindowSize";

function Upload() {
  const lightbox = useLightbox();
  const Button = lightbox.Button;
  const shouldDisplay = lightbox.shouldDisplay;
  const { promiseInProgress } = usePromiseTracker({
    area: "email-area",
    delay: 0,
  });
  const [width, height] = useWindowSize();

  if (width > 536) {
  }
  return (
    <>
      <section className="topContent">
        <DragAndDrop />
      </section>
      <section
        className="bottmoContainer"
        style={width > 536 ? { top: "14em" } : { top: "13em" }}
      >
        {promiseInProgress ? (
          <Loader area="email-area" />
        ) : (
          shouldDisplay && <Button />
        )}
      </section>
    </>
  );
}

export default Upload;
