import { usePromiseTracker } from "react-promise-tracker";
import { Audio } from "react-loader-spinner";

const Loader = ({ area }) => {
  const { promiseInProgress } = usePromiseTracker({ area: area });

  return (
    <div className="loader">
      {promiseInProgress && (
        <Audio
          height="80"
          width="80"
          color="lightcoral"
          ariaLabel="loading"
          area={area}
          className="loader"
        />
      )}
    </div>
  );
};

export default Loader;
