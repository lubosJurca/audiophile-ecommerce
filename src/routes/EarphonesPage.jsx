// components
import ItemHeader from "../components/Item/ItemHeader";
import EarphonesList from "../components/Earphones/EarphonesList";
import ItemsNavigation from "../components/ItemsNavigation/ItemsNavigation";

import { ProductsContext } from "../products/products-context";
import { useContext } from "react";

import { CircleLoader } from "react-spinners";

function EarphonesPage() {
  let loading = useContext(ProductsContext).loading;

  return (
    <>
      {loading ? (
        <CircleLoader />
      ) : (
        <>
          {" "}
          <ItemHeader>Earphones</ItemHeader>
          <EarphonesList />
          <ItemsNavigation />
        </>
      )}
    </>
  );
}

export default EarphonesPage;
