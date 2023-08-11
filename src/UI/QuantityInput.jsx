import { useState } from "react";

// css
import "./QuantityInput.css";

function QuantityInput({ addToCartHandler }) {
  const [counter, setCounter] = useState(1);
 

  const decrement = (e) => {
    e.preventDefault();
    setCounter((prevState) => prevState - 1);
  };

  const add = (e) => {
    e.preventDefault();
    setCounter((prevState) => prevState + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addToCartHandler(counter);
    ;
  };

  return (
    <form className="quantity-form">
      <div className="quantity-wrapper">
        <button onClick={decrement} disabled={counter < 2}>
          -
        </button>
        <input
          type="number"
          value={counter}
          onChange={(e) => setCounter(e.target.value)}
        />
        <button onClick={add}>+</button>
      </div>
      <button type="submit" onClick={handleSubmit} className="submit-btn">
        ADD TO CART
      </button>
    </form>
  );
}

export default QuantityInput;
