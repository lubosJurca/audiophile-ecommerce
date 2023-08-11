// css
import "./NewProduct.css";

import { JackInTheBox } from "react-awesome-reveal";

// images
import newProduct from "../../../assets/newProductHeadphones.png";
// UI
import Button from "../../../UI/Button";

function NewProduct() {
  return (
    <JackInTheBox triggerOnce>
      <section className="new-product">
        <div className="new-product-wrapper">
          <div className="new-product-info">
            <p className="overline">New product</p>
            <h1>XX99 Mark II Headphones</h1>
            <p className="new-product-description">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Button title="SEE PRODUCT" class="orange" id="4" />
          </div>
          <img src={newProduct} alt="New product headphones" />
        </div>
      </section>
    </JackInTheBox>
  );
}

export default NewProduct;
