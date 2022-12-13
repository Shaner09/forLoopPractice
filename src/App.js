import Log from "./components/Log";
import Loop from "./components/Loop";
import { useState, useRef } from 'react';
import Challenges from "./components/Challenges";
import Help from "./components/Help";


function App() {
  const [startingI, setStartingI] = useState(0)
  const [array, setArray] = useState([9,6,3,4,7])
  const [limiter, setLimiter] = useState(0)
  const [incrementor, setIncrementor] = useState(1)
  const [dLL, setDLL]=useState([])
  const [position, setPosition]=useState(-1)
  const [results, setResults]=useState([])
  const codeTarget = useRef(null);
  const arrayTarget = useRef(null);
  const indexerTarget = useRef(null);
  const incrementorTarget = useRef(null);
  const limiterTarget = useRef(null);
  const printTarget = useRef(null);
  const elementTarget = useRef(null);
  const currentITarget = useRef(null);
  const currentElementTarget = useRef(null);
  const backButtonTarget = useRef(null);
  const forwardButtonTarget = useRef(null);
  const runButtonTarget = useRef(null);
  const terminalTarget = useRef(null);
  return (
    <div className="App">
      <div className={"DisplayHolder"}
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Challenges results={results} setResults={setResults} dLL={dLL} setDLL={setDLL} position={position} setPosition={setPosition}></Challenges>
      <Help incrementorTarget={incrementorTarget} limiterTarget={limiterTarget} codeTarget={codeTarget} arrayTarget={arrayTarget} indexerTarget={indexerTarget} printTarget={printTarget} elementTarget={elementTarget} currentITarget={currentITarget} currentElementTarget={currentElementTarget} backButtonTarget={backButtonTarget} forwardButtonTarget={forwardButtonTarget} runButtonTarget={runButtonTarget} terminalTarget={terminalTarget}/>
    </div>
      <Loop startingI={startingI} setStartingI={setStartingI} array={array} setArray={setArray} limiter={limiter} setLimiter={setLimiter} incrementor={incrementor} setIncrementor={setIncrementor} dLL={dLL} setDLL={setDLL} position={position} setPosition={setPosition} incrementorTarget={incrementorTarget} limiterTarget={limiterTarget} codeTarget={codeTarget} arrayTarget={arrayTarget} indexerTarget={indexerTarget} printTarget={printTarget} elementTarget={elementTarget}></Loop>
      <Log startingI={startingI} setStartingI={setStartingI} array={array} setArray={setArray} limiter={limiter} setLimiter={setLimiter} incrementor={incrementor} setIncrementor={setIncrementor} dLL={dLL} setDLL={setDLL} position={position} setPosition={setPosition} results={results} setResults={setResults} currentITarget={currentITarget} currentElementTarget={currentElementTarget} backButtonTarget={backButtonTarget} forwardButtonTarget={forwardButtonTarget} runButtonTarget={runButtonTarget} terminalTarget={terminalTarget}></Log>
    </div>
  );
}

export default App;
