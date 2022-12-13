import { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Overlay from "react-bootstrap/Overlay";
import Popover from "react-bootstrap/Popover";
import "../App.css";
function Hint(props) {
  const { target, message, tipNumber, placement, tipCounter, showModal } = props;
  const ref = useRef(null);

  return (
    <div ref={ref}>
      {showModal && tipCounter === tipNumber && (
        <Overlay
          show={true}
          target={target}
          placement={placement}
          container={ref}
          containerPadding={20}
        >
          <Popover style={{maxWidth:`${placement==="left" ? `${tipNumber===10 ? "225px" : "250px"}` : ""}`}}>
            <Popover.Body>{message}</Popover.Body>
          </Popover>
        </Overlay>
      )}
    </div>
  );
}

export default Hint;
