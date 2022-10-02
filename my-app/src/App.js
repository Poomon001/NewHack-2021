import "./App.css";
import Lightbox from "./Components/Lightbox";
import { LightboxProvider } from "./Components/util/useLightbox";
import Display from "./Components/Display";
import { ResultProvider } from "./Components/util/useResult";
import Body from "./Components/Body";
import SimpleReactLightbox from "simple-react-lightbox";
import { AlertProvider } from "./Components/util/useAlert";

function App() {
  return (
    <div className="App">
      <LightboxProvider>
        <ResultProvider>
          <Lightbox>
            <Display />
          </Lightbox>
          <SimpleReactLightbox>
            <AlertProvider>
              <Body />
            </AlertProvider>
          </SimpleReactLightbox>
        </ResultProvider>
      </LightboxProvider>
    </div>
  );
}

export default App;
