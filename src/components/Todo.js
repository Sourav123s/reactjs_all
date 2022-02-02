import { useState } from "react";

import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [modelIsOpen, setModalIsOpen] = useState(false);
  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closedModalHandler() {
    setModalIsOpen(false);
  }
  return (
    <div className="card">
      <h3>{props.text}</h3>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modelIsOpen && (
        <Modal onCencel={closedModalHandler} onConfirm={closedModalHandler} />
      )}
      {modelIsOpen && <Backdrop onClick={closedModalHandler} />}
    </div>
  );
}

export default Todo;
