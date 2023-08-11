import { ProductsContext } from "../../products/products-context";
import { useContext } from "react";



// component
import ItemBox from "../Item/ItemBox";

function SpeakersList() {
  const data = useContext(ProductsContext).products;
  return (
    <>
      {data === undefined && <p>Loading...</p>}
      {data?.slice(3, 5).map((item) => {
        return <ItemBox key={item.id} {...item} />;
      })}
    </>
  );
}

export default SpeakersList;
