// components
import ItemHeader from "../components/Item/ItemHeader";
import EarphonesList from "../components/Earphones/EarphonesList";
import ItemsNavigation from "../components/ItemsNavigation/ItemsNavigation";

function EarphonesPage() {
  return (
    <>
      <ItemHeader title="EARPHONES" />
      <EarphonesList />
      <ItemsNavigation />
    </>
  );
}

export default EarphonesPage;
