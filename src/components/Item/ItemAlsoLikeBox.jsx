// UI
import Button from "../../UI/Button";

// css
import "./ItemAlsoLikeBox.css"

function ItemAlsoLikeBox({ image,title,id }) {
  return (
    <div className="item-also-like-wrapper">
      <div className="also-like-image-wrapper">
        <img src={image} alt="Audiophile product" />
      </div>
      <h5>{title}</h5>
      <Button id={id} class="orange"/>
    </div>
  );
}

export default ItemAlsoLikeBox;
