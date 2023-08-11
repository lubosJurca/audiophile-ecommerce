// image
import oval from "../../assets/oval.png";

// css
import "./ImageWrapper.css"

function ImageWrapper({ title,image }) {
  return (
    <div className="image-wrapper">
      <img src={image} alt={title} className="item-image" />
      <img src={oval} alt="oval" />
    </div>
  );
}

export default ImageWrapper;
