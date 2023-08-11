import React from "react";

// firebase
import { db } from "../firebase/config";
import { collection } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

export const ProductsContext = React.createContext({
  products: [],
});

export default (props) => {
  const productsRef = collection(db, "products");
  const [docs, loading, error] = useCollectionData(productsRef);

  return (
    <ProductsContext.Provider value={{ products: docs }}>
      {props.children}
    </ProductsContext.Provider>
  );
};
