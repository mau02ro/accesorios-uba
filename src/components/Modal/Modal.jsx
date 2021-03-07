import React from "react";
import { createPortal } from "react-dom";

import "./modal.css";
import { Fragment } from "react";

const Modal = ({ children }) => {
  return createPortal(
    <React.Fragment>
      <div className="modal_mask">
        <div className="wrapper modal_wrapper">
          <div className="modal_content">{children}</div>
        </div>
      </div>
    </React.Fragment>,
    document.getElementById("modal")
  );
};

export default Modal;
