import React from "react";

const Modal = (props) => {
  const modalStyle = {
    display: "block",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  };
  return (
    <div
      className="modal show fade"
      style={modalStyle}
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              Warning
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => props.close()}
            ></button>
          </div>
          <div className="modal-body">{props.error}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
