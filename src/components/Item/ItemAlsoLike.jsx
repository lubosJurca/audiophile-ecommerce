import { ProductsContext } from "../../products/products-context";
import { useContext } from "react";

// component
import ItemAlsoLikeBox from "./ItemAlsoLikeBox";

// css
import "./ItemAlsoLike.css";

function ItemAlsoLike({ id }) {
  const data = useContext(ProductsContext).products;

  const filteredData = data?.filter((item) => {
    return item.id !== id;
  });

  return (
    <div className="item-also-like-container">
      <h3>YOU MAY ALSO LIKE </h3>
      <div className="item-also-like-flexbox">
        {filteredData.slice(0, 3).map((item) => {
          return <ItemAlsoLikeBox key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
}

export default ItemAlsoLike;
