import { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import "../App.css";
import { Button } from "react-bootstrap";
import Hint from "./Hint";
function Help(props) {
  const {
    codeTarget,
    arrayTarget,
    indexerTarget,
    incrementorTarget,
    limiterTarget,
    printTarget,
    elementTarget,
    currentITarget,
    currentElementTarget,
    backButtonTarget,
    forwardButtonTarget,
    runButtonTarget,
    terminalTarget,
  } = props;
  const [showModal, setShowModal] = useState(false);
  const [tipCounter, setTipCounter] = useState(0);
  const handleClose = () => {
    setShowModal(false);
  };
  const handleNextTip = () => {
    if (tipCounter < 14) {
      setTipCounter(tipCounter + 1);
    }
  };
  const handlePreviousTip = () => {
    if (tipCounter > 0) {
      setTipCounter(tipCounter - 1);
    }
  };
  const ref = useRef(null);

  return (
    <div>
      <Button
        style={{ background: "yellow", color: "black" }}
        onClick={() => setShowModal(true)}
      >
        Help
      </Button>
      <Modal
        backdrop={"static"}
        show={showModal}
        style={{ top: "75%" }}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title
            style={{ textAlign: "center", flexGrow: "1" }}
          ></Modal.Title>
        </Modal.Header>
        <Modal.Footer style={{ justifyContent: "space-around" }}>
          <Button onClick={handlePreviousTip}>Previous Tip</Button>
          <Button onClick={handleNextTip}>Next Tip</Button>
        </Modal.Footer>
      </Modal>
      <Hint
        tipNumber={0}
        placement={"bottom"}
        target={codeTarget}
        message={
          "This is the Code Block. Modify the fields in this area to get the contents of the Terminal Block to change. Getting the correct output will complete different challenges."
        }
        tipCounter={tipCounter}
        showModal={showModal}
      />
      <Hint
        tipNumber={1}
        placement={"bottom"}
        target={arrayTarget}
        message={
          "This is the array we will be looping through. Notice it has 5 numbers in it, so its length will be 5. Each number can also be called an element."
        }
        tipCounter={tipCounter}
        showModal={showModal}
      />
      <Hint
        tipNumber={2}
        placement={"bottom"}
        target={indexerTarget}
        message={
          "Here we are initializing the Indexer. We use the indexer to access specific elements in the array. We have it start at 0 most of the time because the first element in an array will always be at position 0. You can change this number to have the loop start later in the array.(Side Note: It is best practice to name the indexer index, i, j, k etc... - but we could name it whatever we want if we had a good reason. It is just a variable, the name has no effect on the function.)"
        }
        tipCounter={tipCounter}
        showModal={showModal}
      />
      <Hint
        tipNumber={3}
        placement={"bottom"}
        target={limiterTarget}
        message={
          "This middle part of the loop is called the condition. If the expression here is true, the code in the curly braces will run - followed by the update(the part to the right of this, after the semicolon) - and then lastly the condition will be checked again, and if it is true, the cycle will continue. If it is false, the code in the curly braces will not run and the program will pick back up after the curly braces, stopping the loop."
        }
        tipCounter={tipCounter}
        showModal={showModal}
      />
      <Hint
        tipNumber={4}
        placement={"bottom"}
        target={limiterTarget}
        message={
          "The condition stops i from getting too big. If we try to print array[i] when i is not a valid position in the array, our program will crash. Since our array has 5 numbers in it, we stop i at 4, because 4 is the last valid position in the array. If we subtract from array.length, we can make our loop stop early to keep it from printing some of the last numbers in the array. You can try typing numbers in this field to make the loop stop early."
        }
        tipCounter={tipCounter}
        showModal={showModal}
      />
      <Hint
        tipNumber={5}
        placement={"left"}
        target={incrementorTarget}
        message={
          "This last part is called the Update. This runs each time after the code in the curly braces, and adds to i so we can use i to access different elements in the array. If i stayed at 0, we would just be printing 9 over and over again, since 9 is the number at position 0 in our array. So i starts at 0, then goes to 1, then goes to 2, and so on..."
        }
        tipCounter={tipCounter}
        showModal={showModal}
      />
      <Hint
        tipNumber={6}
        placement={"left"}
        target={incrementorTarget}
        message={
          "This also keeps our loop from running indefinitely. Without it, i would remain 0, and 0 would always be less than array.length in the condition, meaning the coondition would always be true. You can change this field to skip numbers in the array."
        }
        tipCounter={tipCounter}
        showModal={showModal}
      />
      <Hint
        tipNumber={7}
        placement={"top"}
        target={printTarget}
        message={
          "This is the print statement, it will display whatever we put in it on the terminal. Since it is located in the curly braces that are attached to our for loop, it will run several times, until our loop stops."
        }
        tipCounter={tipCounter}
        showModal={showModal}
      />
      <Hint
        tipNumber={8}
        placement={"bottom"}
        target={elementTarget}
        message={`I like to call array[i] the "Current Element". When i is 0, array[i] is 9. When i is 1, array[i] is 6. array[i] is the element at position i in the array. This is why we are able to print every number in the array, because array[i] changes based on what i is.`}
        tipCounter={tipCounter}
        showModal={showModal}
      />
      <Hint
        tipNumber={9}
        placement={"top"}
        target={currentITarget}
        message={
          "When stepping through the loop, this will show us what i is at our current step. This helps us see exactly what is happening in our loop."
        }
        tipCounter={tipCounter}
        showModal={showModal}
      />
      <Hint
        tipNumber={10}
        placement={"left"}
        target={currentElementTarget}
        message={
          "When stepping through the loop, this will show us what array[i] is at our current step. This helps us see exactly what is happening in our loop. When it is empty, that means that array[i] is undefined."
        }
        tipCounter={tipCounter}
        showModal={showModal}
      />
      <Hint
        tipNumber={12}
        placement={"top"}
        target={backButtonTarget}
        message={
          "Normally when we run code, it all runs so fast that we can't see what is happening. You can use this button to rewind the code one line at a time so you can see what is happening in each step."
        }
        tipCounter={tipCounter}
        showModal={showModal}
      />
      <Hint
        tipNumber={11}
        placement={"top"}
        target={forwardButtonTarget}
        message={
          "Normally when we run code, it all runs so fast that we can't see what is happening. You can use this button to run the code one line at a time so you can see what is happening in each step."
        }
        tipCounter={tipCounter}
        showModal={showModal}
      />
      <Hint
        tipNumber={13}
        placement={"left"}
        target={runButtonTarget}
        message={
          "Press this button to run the above code and print its results to the terminal. If you have filled out the fields correctly, a challenge will be completed upon pressing this button."
        }
        tipCounter={tipCounter}
        showModal={showModal}
      />
      <Hint
        tipNumber={14}
        placement={"top"}
        target={terminalTarget}
        message={
          "This is the Terminal Block. This is where the print statements from the code above will be displayed. Get the output to match a challenge requirement, and that challenge will be completed."
        }
        tipCounter={tipCounter}
        showModal={showModal}
      />
    </div>
  );
}

export default Help;
