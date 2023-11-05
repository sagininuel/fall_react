function Modal(props) {
    function cancelHandler() {
      props.onCancel();
    }
  
    function confirmHandler() {
      props.onConfirm();
    }
    return (
      <div className="modal">
        <p>You sure?</p>
        <button className="bn btn--alt" onClick={cancelHandler}>
          Cancel
        </button>
        <button className="btn" onClick={confirmHandler}>
          Confirm
        </button>
      </div>
    );
  }
  
  export default Modal;