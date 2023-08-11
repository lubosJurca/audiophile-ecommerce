// Cart Context
import { useContext } from "react";
import CartContext from "../../store/cart-context";

// awesome reveal
import { Slide } from "react-awesome-reveal";

// components
import CheckoutItemBox from "./CheckoutItemBox";

import "./CheckoutSummary.css";

function CheckoutSummary() {
  const cartCtx = useContext(CartContext);
  const hasItems = cartCtx.items.length > 0;

  const total = cartCtx.totalAmount;
  const shipping = 50;
  const tax = +((cartCtx.totalAmount / 100) * 20).toFixed(0);
  const grandTotal = cartCtx.totalAmount + tax + shipping;

  return (
    <Slide direction="right" triggerOnce>
      <div className="checkout-box-container">
        <h6>Summary</h6>
        {hasItems &&
          cartCtx.items.map((item) => {
            return <CheckoutItemBox key={item.id} {...item} />;
          })}
        <div className="price-container">
          <div className="price-box">
            <p className="grayish">TOTAL</p>
            <h6>${total}</h6>
          </div>
          <div className="price-box">
            <p className="grayish">SHIPPING</p>
            <h6>${shipping}</h6>
          </div>
          <div className="price-box">
            <p className="grayish">VAT (INCLUDED)</p>
            <h6>${tax}</h6>
          </div>
          <div className="price-box">
            <p className="grayish">GRAND TOTAL</p>
            <h6 className="orange-price">${grandTotal}</h6>
          </div>
        </div>
      </div>
    </Slide>
  );
}

export default CheckoutSummary;
