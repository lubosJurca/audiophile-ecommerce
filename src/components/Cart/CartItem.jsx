import "./CartItem.css";

function CartItem(props) {
  return (
    <div className="cart-item-container">
      <div className="cart-image-info-wrapper">
        <div className="cart-item-image-wrapper">
          <img src={props.image} alt="Product Image" />
        </div>
        <div className="cart-item-info-wrapper">
          <p>{props.name}</p>
          <p className="overline">$ {props.price}</p>
        </div>
      </div>
      <div className="counter">
        <button onClick={props.onRemove}>-</button>
        <p>{props.amount}</p>
        <button onClick={props.onAdd}>+</button>
      </div>
    </div>
  );
}

export default CartItem;
