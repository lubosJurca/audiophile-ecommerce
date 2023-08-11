// UI
import Button from "../../UI/Button";

// css
import "./ItemBox.css";
import ImageWrapper from "./ImageWrapper";

import { Fade } from "react-awesome-reveal";

function ItemBox({ title, isNewProduct, image, desc, id }) {
  return (
    <section className="item-box">
      <Fade>
        <ImageWrapper title={title} image={image} />
        <div className="about-wrapper">
          {isNewProduct && <p className="overline">NEW PRODUCT</p>}
          <h2>{title}</h2>
          <p className="desc">{desc}</p>
          <Button class="orange" id={id} />
        </div>
      </Fade>
    </section>
  );
}

export default ItemBox;
