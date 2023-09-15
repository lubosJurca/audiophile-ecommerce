// components
import ItemHeader from "../components/Item/ItemHeader";
import SpeakersList from "../components/Speakers/SpeakersList";
import ItemsNavigation from "../components/ItemsNavigation/ItemsNavigation";

import { CircleLoader } from "react-spinners";

import { ProductsContext } from "../products/products-context";
import { useContext } from "react";

function SpeakersPage() {
  let loading = useContext(ProductsContext).loading;
  return (
    <>
      {loading ? (
        <CircleLoader />
      ) : (
        <>
          <ItemHeader title="Speakers" />
          <SpeakersList />
          <ItemsNavigation />
        </>
      )}
    </>
  );
}

export default SpeakersPage;
