import "./CheckoutItemBox.css"

function CheckoutItemBox(props) {
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
      <p className="checkbox-amount">{props.amount}x</p>
    </div>
  )
}

export default CheckoutItemBox