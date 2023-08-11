import { Fragment } from "react";
import ReactDOM from 'react-dom';

// css
import "./Modal.css";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onHideCart}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className="modal">
      <div className="modal-children">{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

function Modal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onHideCart={props.onHideCart} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
}

export default Modal;
