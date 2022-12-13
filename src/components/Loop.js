import React, { useState, useRef } from "react";
import Overlay from "react-bootstrap/Overlay";
import "../App.css";
function Loop(props) {
  const {
    position,
    dLL,
    array,
    startingI,
    setStartingI,
    limiter,
    setLimiter,
    incrementor,
    setIncrementor,
    codeTarget,
    arrayTarget,
    indexerTarget,
    limiterTarget,
    incrementorTarget,
    printTarget,
    elementTarget
  } = props;
  const [showIncrementorToolTip, setShowIncrementorToolTip] = useState(false);
  const [displayIncrementor, setDisplayIncrementor] = useState(1);
  const handleIncrementor = (event) => {
    setDisplayIncrementor(event.target.value);
    if (event.target.value === "0") {
      setDisplayIncrementor(1);
    }
    if (event.target.value > 0) {
      setIncrementor(Math.max(event.target.value, 1));
    }
  }
  return (
    <div className="DisplayHolder">
      <div className="Display">
        <u ref={codeTarget}>Code</u>
        <div className="Code"><span ref={arrayTarget}>{`int[] array = new int[]{`}{array.map((el,i)=><span><span key = {i} style={{background:`${i===dLL[position]?.i ? "yellow" : "white"}`}}>{el}</span>{`${i === array.length-1 ? " " : ", "}`}</span>)}{`};`}</span></div>
        <div className="Code">
          {`for (`}<span ref={indexerTarget}>{`int i = `}
          <input
            style={{
              height: "21.5px",
              width: `${startingI > 9 ? "24px" : "18px"}`,
            }}
            type="text"
            value={startingI}
            onChange={(event) => setStartingI(event.target.value)}
          />
          </span>
          {`;`}
          <span
            ref={limiterTarget}
            style={{ background: `${ dLL[position]?.highlight === 1 ? `${dLL[position]?.i >= dLL[position]?.limiter ? "red" : "limegreen"}` : "white"}`,}}
          >
            {` i<array.length${limiter > 0 ? "-" : ""}`}
            <input
              style={{
                height: "21.5px",
                width: `${limiter > 9 ? "24px" : "18px"}`,
              }}
              type="text"
              value={limiter > 0 ? limiter : ""}
              onChange={(event) =>
                setLimiter(
                  parseInt(event.target.value) >= 0
                    ? parseInt(event.target.value)
                    : 0
                )
              }
            />{" "}
          </span>
          {`; `}
          <span
            ref={incrementorTarget}
            style={{
              background: `${
                dLL[position]?.highlight === 3 ? "yellow" : "white"
              }`,
            }}
          >
            {`i+=`}
            <input
              style={{
                height: "21.5px",
                width: `${incrementor > 9 ? "24px" : "18px"}`,
              }}
              type="text"
              value={displayIncrementor}
              onFocus={() => setShowIncrementorToolTip(true)}
              onBlur={() => setShowIncrementorToolTip(false)}
              onChange={handleIncrementor}
            />
          </span>
          {`) {`}
          <div className="Code">
            <span ref={printTarget} style={{background: `${ dLL[position]?.highlight === 2 ? "yellow" : "white"}`}}>
              System.out.println(<span ref={elementTarget}>array[i]</span>);
            </span>
          </div>
          {`}`}
        </div>
      </div>


      
      <Overlay
        target={limiterTarget.current}
        show={dLL[position]?.highlight === 1}
        placement="top"
      >
        {({ placement, arrowProps, show: _show, popper, ...props }) => (
          <div
            {...props}
            style={{
              position: "absolute",
              backgroundColor: `${ dLL[position]?.i >= dLL[position]?.limiter ? "red" : "limegreen"}`,
              padding: "2px 10px",
              color: "white",
              borderRadius: 3,
              ...props.style,
            }}
          >
            {`${dLL[position]?.i} < ${dLL[position]?.limiter} is ${
              dLL[position]?.i < dLL[position]?.limiter
            }, loop ${
              dLL[position]?.i < dLL[position]?.limiter
                ? "will run"
                : "will stop/not run"
            }`}
          </div>
        )}
      </Overlay>
      <Overlay
        target={incrementorTarget.current}
        show={showIncrementorToolTip}
        placement="top"
      >
        {({ placement, arrowProps, show: _show, popper, ...props }) => (
          <div
            {...props}
            style={{
              position: "absolute",
              backgroundColor: "yellow",
              padding: "2px 10px",
              color: "red",
              borderRadius: 3,
              ...props.style,
            }}
          >
            {`A value < 1 here will cause an infinite loop`}
          </div>
        )}
      </Overlay>
    </div>
  );
}

export default Loop;
