function Modal(props) {
  function cencelModal() {
    props.onCencel();
  }

  function confirmModal() {
    props.onConfirm();
  }

  return (
    <div className="modal">
      <p>Are you sure ?</p>
      <button className="btn btn--alt" onClick={cencelModal}>
        Cencel
      </button>
      <button className="btn btn--alt" onClick={confirmModal}>
        Confirm
      </button>
    </div>
  );
}

export default Modal;
