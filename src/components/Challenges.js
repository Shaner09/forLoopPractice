import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Dropdown from "react-bootstrap/Dropdown";
import "../App.css";
function Challenges(props) {
  const {results, position, dLL} = props
  const [showModal, setShowModal] = useState(false);
  const [challenges, setChallenges] = useState([
    { isComplete: false, requirement: [9, 6, 3, 4, 7] },
    { isComplete: false, requirement: [6, 3, 4, 7] },
    { isComplete: false, requirement: [4, 7] },
    { isComplete: false, requirement: [9, 6, 3, 4] },
    { isComplete: false, requirement: [9, 6] },
    { isComplete: false, requirement: [6, 3, 4] },
    { isComplete: false, requirement: [3] },
    { isComplete: false, requirement: [9, 3, 7] },
    { isComplete: false, requirement: [3, 7] },
    { isComplete: false, requirement: [9, 3] },
  ]);
  const handleClose = () => {
    setShowModal(false);
  };
  useEffect(() => {
    setChallenges(
      challenges.map((challenge) => {
        if (
          JSON.stringify(results) === JSON.stringify(challenge.requirement) &&
          position === dLL.length - 1 &&
          !challenge.isComplete
        ) {
          setShowModal(true);
          setTimeout(() => {
            setShowModal(false);
          }, 2000);
          return { ...challenge, isComplete: true };
        } else {
          return { ...challenge };
        }
      })
    );
  }, [results]);
  return (
      <Dropdown>
        <Dropdown.Toggle
          style={{ background: "yellow", color: "black" }}
        >
          Challenges
        </Dropdown.Toggle>

        <Dropdown.Menu style={{ padding: "0px" }}>
          {challenges.map((challenge, i) => (
            <Dropdown.Item
              key={i}
              style={{ background: `${challenge.isComplete ? "limegreen" : "white"}`}}
            >
              Get the terminal to read: {`${challenge.requirement}`}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header
          style={{
            background: "limegreen",
            borderBottom: "none",
            borderRadius: "5px",
          }}
          closeButton
        >
          <Modal.Title style={{ textAlign: "center", flexGrow: "1" }}>
            You have completed a challenge!
          </Modal.Title>
        </Modal.Header>
      </Modal>
    </Dropdown>
  );
}

export default Challenges;
