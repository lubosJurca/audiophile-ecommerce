// productContext
import { ProductsContext } from "../../products/products-context";
import { useContext } from "react";

// component
import ItemBox from "../Item/ItemBox";

function HeadphonesList() {
  const data = useContext(ProductsContext).products;

  return (
    <>
      {data?.slice(0, 3).map((item) => {
        return <ItemBox key={item.id} {...item} />;
      })}
    </>
  );
}

export default HeadphonesList;
