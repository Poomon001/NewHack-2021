import { usePromiseTracker } from "react-promise-tracker";
import { Audio } from "react-loader-spinner";

const Loader = (props) => {
  const { promiseInProgress } = usePromiseTracker();

  return (
    promiseInProgress && (
      <Audio height="100" width="100" color="grey" ariaLabel="loading" />
    )
  );
};

export default Loader;
