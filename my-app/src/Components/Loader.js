import { usePromiseTracker } from "react-promise-tracker";
import { Audio } from "react-loader-spinner";

const Loader = ({ area }) => {
  const { promiseInProgress } = usePromiseTracker({ area: area });

  return (
    promiseInProgress && (
      <Audio
        height="100"
        width="100"
        color="grey"
        ariaLabel="loading"
        area={area}
      />
    )
  );
};

export default Loader;
