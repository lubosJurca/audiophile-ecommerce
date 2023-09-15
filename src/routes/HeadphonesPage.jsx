// components
import ItemHeader from "../components/Item/ItemHeader";
import HeadphonesList from "../components/Headphones/HeadphonesList";
import ItemsNavigation from "../components/ItemsNavigation/ItemsNavigation";

import { CircleLoader } from "react-spinners";

import { ProductsContext } from "../products/products-context";
import { useContext } from "react";

function HeadphonesPage() {
  let loading = useContext(ProductsContext).loading;
  return (
    <>
      {loading ? (
        <CircleLoader />
      ) : (
        <>
          {" "}
          <ItemHeader>HEADPHONES</ItemHeader>
          <HeadphonesList />
          <ItemsNavigation />
        </>
      )}
    </>
  );
}

export default HeadphonesPage;
