import { Link } from "react-router-dom";
import { useContext } from "react";

// component
import ImageWrapper from "./ImageWrapper";
import ItemFeatures from "./ItemFeatures";
import InTheBox from "./InTheBox";
import ItemGrid from "./ItemGrid";
import ItemAlsoLike from "./ItemAlsoLike";
import ItemsNavigation from "../ItemsNavigation/ItemsNavigation";
import CartContext from "../../store/cart-context";

// UI
import QuantityInput from "../../UI/QuantityInput";

// css
import "./ItemDetail.css";
import { Fade, Slide } from "react-awesome-reveal";

function ItemDetail({
  title,
  image,
  isNewProduct,
  desc,
  price,
  features1,
  features2,
  image1,
  image2,
  image3,
  id,
  subtitle,
  boxTitle1,
  boxTitle2,
  boxTitle3,
  boxTitle4,
  boxTitle5,
  boxNumber1,
  boxNumber2,
  boxNumber3,
  boxNumber4,
  boxNumber5,
}) {
  const cartCtx = useContext(CartContext);
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: id,
      name: title,
      amount: amount,
      price: price,
      image: image,
    });
  };

  const inTheBoxItems = [
    {
      boxTitle: boxTitle1,
      boxNumber: boxNumber1,
    },
    {
      boxTitle: boxTitle2,
      boxNumber: boxNumber2,
    },
    {
      boxTitle: boxTitle3,
      boxNumber: boxNumber3,
    },
    {
      boxTitle: boxTitle4,
      boxNumber: boxNumber4,
    },
    {
      boxTitle: boxTitle5 ? boxTitle5 : undefined,
      boxNumber: boxNumber5 ? boxNumber5 : null,
    },
  ];

  return (
    <>
      <section className="item-detail-container">
        <Link to=".." className="go-back">Go back</Link>

        
          <div className="item-detail">
            <ImageWrapper title={title} image={image} />
            <div className="item-detail-info-wrapper">
              {isNewProduct && <p className="overline">NEW PRODUCT</p>}
              <h2>{`${title} ${subtitle}`}</h2>
              <p className="desc">{desc}</p>
              <h6>{`$ ${price}`}</h6>
              <QuantityInput addToCartHandler={addToCartHandler} />
            </div>
          </div>
        

        <div className="features-box">
          <Slide direction="left" delay={0.2} triggerOnce>
            <ItemFeatures features1={features1} features2={features2} />
          </Slide>
          <Slide direction="right" delay={0.2} triggerOnce>
            <InTheBox inTheBox={inTheBoxItems} />
          </Slide>
        </div>

        <ItemGrid image1={image1} image2={image2} image3={image3} /> 
        <ItemAlsoLike id={id} />
      </section>
      <ItemsNavigation />
    </>
  );
}

export default ItemDetail;
