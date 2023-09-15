import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductsContext } from "../products/products-context";

// UI
import ItemDetail from "../components/Item/ItemDetail";


function ItemDetailPage() {
  const itemId = useParams();
  const data = useContext(ProductsContext).products
  
  
  const product = data.filter((item) => {
    return item.id === itemId.productId;
  });

  


  return (
    <>
      {data === undefined && <p>Loading...</p>}
      {product?.map((item) => {
        return (
          <ItemDetail
            key={item.id}
            {...item}
          />
        );
      })}
    </>
  );
}

export default ItemDetailPage;
