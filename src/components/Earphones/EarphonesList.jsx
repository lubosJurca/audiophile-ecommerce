import { ProductsContext } from "../../products/products-context";
import { useContext, useEffect, useState } from "react";

import { Fade } from "react-awesome-reveal";

// component
import ItemBox from "../Item/ItemBox";

function EarphonesList() {
  const data = useContext(ProductsContext).products;

  return (
    <>
      {data.slice(5, 6).map((item) => {
        return <ItemBox key={item.id} {...item} />;
      })}
    </>
  );
}

export default EarphonesList;
