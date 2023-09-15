import React, { useEffect, useState } from "react";

// firebase
import { getProducts } from "../firebase/config";

export const ProductsContext = React.createContext({
  products: [],
});

export default (props) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  return (
    <ProductsContext.Provider
      value={{ products: products, loading: loading, error: error }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};
