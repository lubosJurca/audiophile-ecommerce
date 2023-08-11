// MUI
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import DoneIcon from "@mui/icons-material/Done";

// css
import "./CheckoutFinal.css";

import CheckoutItemBox from "./CheckoutItemBox";

// Cart Context
import { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import { Link } from "react-router-dom";

function CheckoutFinal(props) {
  const cartCtx = useContext(CartContext);
  const [showAll, setShowAll] = useState(true);

  const shipping = 50;
  const tax = +((cartCtx.totalAmount / 100) * 20).toFixed(0);
  const grandTotal = cartCtx.totalAmount + tax + shipping;

  let finalWrapper;

  if (showAll) {
    finalWrapper = (
      <div className="items-final-wrapper">
        {cartCtx.items.map((item) => {
          return <CheckoutItemBox key={item.id} {...item} />;
        })}
      </div>
    );
  }

  const handleClick = () => {
    cartCtx.removeAllItems();
    props.onClose;
  };

  return (
    <Modal
      open={props.isOpen}
      onClose={props.onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="modal-box">
        <div className="orange-circle">
          <DoneIcon />
        </div>
        <h3>
          THANK YOU <br /> FOR YOUR ORDER
        </h3>
        <p className="confirmation-info">
          You will receive an email confirmation shortly.
        </p>
        <div className="items-final-container">
          <div className="items-final-box">
            {showAll && (
              <div className="items-final-wrapper">
                {cartCtx.items.map((item) => {
                  return <CheckoutItemBox key={item.id} {...item} />;
                })}
              </div>
            )}
            {!showAll && (
              <div className="items-final-wrapper">
                {cartCtx.items.slice(1).map((item) => {
                  return <CheckoutItemBox key={item.id} {...item} />;
                })}
              </div>
            )}
            {cartCtx.items.length > 1 && (
              <button
                className="view-less"
                onClick={() => setShowAll((prevState) => !prevState)}
              >
                {showAll
                  ? "View less"
                  : `And ${cartCtx.items.length - 1} other item(s)`}
              </button>
            )}
          </div>

          <div className="grand-total">
            <p>GRAND TOTAL</p>
            <span className="final-total-price">$ {grandTotal}</span>
          </div>
        </div>
        <Link to="/" className="final-button" onClick={handleClick}>
          Back to home
        </Link>
      </Box>
    </Modal>
  );
}

export default CheckoutFinal;
