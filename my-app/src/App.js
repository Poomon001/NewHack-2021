import "./App.css";
import Lightbox from "./Components/Lightbox";
import { LightboxProvider } from "./Components/util/useLightbox";
import Display from "./Components/Display";
import { ResultProvider } from "./Components/util/useResult";
import Body from "./Components/Body";

function App() {
  return (
    <div className="App">
      <LightboxProvider>
        <ResultProvider>
          <Lightbox>
            <Display />
          </Lightbox>
          <Body />
        </ResultProvider>
      </LightboxProvider>
    </div>
  );
}

export default App;
