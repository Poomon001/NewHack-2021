import DragAndDrop from "./DragAndDrop";
import Loader from "./Loader";
import { useLightbox } from "./util/useLightbox";
import { usePromiseTracker } from "react-promise-tracker";
import React, { useState } from "react";

function Upload() {
  const [open, setOpen] = useState(false);
  const lightbox = useLightbox();
  const Button = lightbox.Button;
  const shouldDisplay = lightbox.shouldDisplay;
  const { promiseInProgress } = usePromiseTracker({
    area: "email-area",
    delay: 0,
  });
  return (
    <section className="topContent">
      <DragAndDrop />
      {promiseInProgress ? (
        <Loader area="email-area" />
      ) : (
        shouldDisplay && <Button />
      )}
    </section>
  );
}

export default Upload;
