import { useContext } from "react";
import { Link } from "react-router-dom";

// cartContext 
import CartContext from "../../store/cart-context";

// UI
import Modal from "../../UI/Modal";


// components
import CartItem from "./CartItem";

// css
import "./Cart.css";

function Cart({ onHideCart }) {
  const cartCtx = useContext(CartContext);
  const hasItems = cartCtx.items.length > 0;

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  return (
    <Modal onHideCart={onHideCart}>
      <div className="cart-flex">
        <h6>CART ({cartCtx.numberOfCartItems})</h6>
        <button className="remove-all-btn" onClick={cartCtx.removeAllItems}>
          Remove all
        </button>
      </div>
      <div>
        {!hasItems && <p>No items in cart.</p>}
        {cartCtx.items.map((item) => {
          return (
            <CartItem
              key={item.id}
              name={item.name}
              image={item.image}
              amount={item.amount}
              price={item.price}
              onRemove={cartItemRemoveHandler.bind(null, item.id)}
              onAdd={cartItemAddHandler.bind(null, item)}
            />
          );
        })}
      </div>
      <div className="cart-flex">
        <p>TOTAL</p>
        <h6>$ {cartCtx.totalAmount}</h6>
      </div>
      {hasItems && <Link to="/checkout" onClick={onHideCart} className="checkout">CHECKOUT</Link>}
    </Modal>
  );
}

export default Cart;
