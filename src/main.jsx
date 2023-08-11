import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ProductsContext from "./products/products-context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ProductsContext>
    <App />
  </ProductsContext>
);
