// Context
import { useContext, useEffect,useState } from "react";
import CartContext from "../store/cart-context";

// material UI
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

// css
import "./HeaderCartButton.css";

function HeaderCartButton(props) {
  const cartCtx = useContext(CartContext);
  const [isNewItemsInCart,setIsNewItemInCart] = useState(false)

  useEffect(() => {
    setIsNewItemInCart(true)

   const timer=  setTimeout(() => {
      setIsNewItemInCart(false)
    },300)

    return () => {
      clearTimeout(timer)
    }
  },[cartCtx.numberOfCartItems])

  return (
    <button className="cart-btn" onClick={props.onClick}>
      <span className="cart-icon">
        <ShoppingCartOutlinedIcon />
      </span>
      {cartCtx.numberOfCartItems > 0 && (
        <div className={`cart-badge-wrapper ${isNewItemsInCart && "bump"}`}>
          <span className="cart-badge">{cartCtx.numberOfCartItems}</span>
        </div>
      )}
    </button>
  );
}

export default HeaderCartButton;
